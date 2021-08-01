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
                <tr v-for="redeemCode in redeemCodes" :key="redeemCode.code">
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
  props: {
    redeemCodes: Array,
  },
  setup() {},
};
</script>
