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
  props: {
    transactions: Array,
  },
  setup() {},
};
</script>
