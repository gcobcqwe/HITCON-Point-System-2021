<template>
    <div class="container overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Points</th>
                    <th>使用狀態</th>
                    <th>時間</th>
                    <th>QR Code</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="redeemCode in redeemCodes" :key="redeemCode.id">
                    <td>{{redeemCode.code}}</td>
                    <td>{{redeemCode.points}}</td>
                    <td>{{redeemCode.is_used? '已使用': '未使用'}}</td>
                    <td>{{redeemCode.created_at}}</td>
                    <td><button class="btn btn-primary" @click="">點選</button></td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            redeemCodes: [{
              "code": "4c1af499-e472-487e-be59-a1adda9a0d07",
              "issuer": "eea2faf2ec64ae85df1da5a16348f053",
              "points": 100,
              "is_used": true,
              "created_at": "2021-06-22T14:46:51.899Z"
            },{
              "code": "adasdasdd-weqe-ewqeq-be59-a1adda9a0d06",
              "issuer": "eea2faf2ec64ae85df1da5a16348f053",
              "points": 100,
              "is_used": false,
              "created_at": "2021-06-22T15:46:51.899Z"
            },{
              "code": "qwewewqew-dsads-trett-be59-a1adda9a0d61",
              "issuer": "eea2faf2ec64ae85df1da5a16348f053",
              "points": 150,
              "is_used": true,
              "created_at": "2021-06-22T16:46:51.899Z"
            },{
              "code": "yutyutyut-e472-gfgf-be59-a1adda9a0d50",
              "issuer": "eea2faf2ec64ae85df1da5a16348f053",
              "points": 200,
              "is_used": true,
              "created_at": "2021-06-22T17:46:51.899Z"
            }]
        };
    }
};
</script>