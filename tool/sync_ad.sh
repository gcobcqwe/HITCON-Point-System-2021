#!/bin/bash
workdir=`pwd`
users_file_path="./data/users.csv"
events_file_path="./data/events.csv"
set -a
source $workdir/.env
set +a
function print() {
  echo "`date` $1"
}

# Fetch account data.
print "============================== Start fetch account data =============================="
cd $workdir/data
npm run start
# TODO: Notify OP if error occurred
print "=============================== End fetch account data ==============================="

# Git diff
print "=================================== Start git diff ==================================="
cd $workdir
users_diff_string=`git diff $users_file_path | grep ^+ | grep -vE .csv`
users_diff_array=(`echo $users_diff_string | sed -e "s/+//g"`)
events_diff_string=`git diff $events_file_path | grep ^+ | grep -vE .csv`
events_diff_array=(`echo $events_diff_string | sed -e "s/+//g"`)
print "Users diff: ${#users_diff_array[@]}"
print "Events diff: ${#events_diff_array[@]}"
print "==================================== End git diff ===================================="

# Parse data to SQL and run psql
print "======================== Start parse data to SQL and run psql ========================"
if [ ${#users_diff_array[@]} = 0 ]
then
    print "No user data change => Exit"
    exit 0
fi
function sql_exec() {
  print "$1"
  PGPASSWORD=$PGPASSWORD psql -h $PGHOST -d $PGDATABASENAME -U $PGUSERNAME -c "$1"
}

for user in ${users_diff_array[@]}
do
  sql="INSERT INTO users(uid,private_kktix_code,nickname,role,points,email) VALUES('`echo $user | sed -e "s/,/','/g" | sed -e "s/%2B/+/g" | sed -e "s/%2C/,/g" | sed -e "s/%20/ /g"`') ON CONFLICT(uid) DO NOTHING;"
  sql_exec "$sql"
done 
# TODO: Exec batch sql.
for event in ${events_diff_array[@]}
do
  sql="INSERT INTO events(uid,one_page_token,kof_server_token,online_token,point_system_token) VALUES('`echo $event | sed -e "s/,/','/g"`') ON CONFLICT(uid) DO NOTHING;"
  sql_exec "$sql"
done
print "========================= End parse data to SQL and run psql ========================="

# Git add and commit
print "============================== Start Git add and commit =============================="
git add $workdir/data/*.csv
git commit -m "`date +%s `"
print "=============================== End Git add and commit ==============================="
