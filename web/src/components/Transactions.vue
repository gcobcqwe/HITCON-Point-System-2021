<template>
    <div class="container overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>傳送者</th>
                    <th>接收者</th>
                    <th>Points</th>
                    <th>種類</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                    <td>{{transaction.sender}}</td>
                    <td>{{transaction.receiver}}</td>
                    <td>{{transaction.points}}</td>
                    <td>{{transaction.type === 'transactions'? '交易': '兌換碼'}}</td>
                    <td>{{transaction.created_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            transactions: [
              {
                  "id": 2,
                  "sender": "eea2faf2ec64ae85df1da5a16348f052",
                  "receiver": "eea2faf2ec64ae85df1da5a16348f053",
                  "type": "transactions",
                  "points": 200,
                  "created_at": "2021-06-22T16:45:08.300Z"
              },
              {
                  "id": 1,
                  "sender": "eea2faf2ec64ae85df1da5a16348f053",
                  "receiver": "eea2faf2ec64ae85df1da5a16348f052",
                  "type": "redeem_codes",
                  "points": 100,
                  "created_at": "2021-06-22T16:43:11.313Z"
              }
            ]
        };
    }
};
</script>