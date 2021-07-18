<template>
    <div class="container overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>項目</th>
                    <th>Points</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="invoice in invoices" :key="invoice.id">
                    <td>{{invoicesFormatter(invoice.invoices)}}</td>
                    <td>{{invoice.points}}</td>
                    <td>{{invoice.created_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
          // TODO: Move to invoices store 
            invoicesFormatter(invoices) {
              let text = invoices.map(invoice => `${invoice.product.name} * ${invoice.quantity} = ${invoice.product.points*invoice.quantity} Points`).join(', ')
              console.log(text)
              return text
            },
            invoices: [
            {
                "id": 4,
                "sender": "eea2faf2ec64ae85df1da5a16348f053",
                "receiver": "SHOP_UID",
                "type": "shop",
                "points": 800,
                "created_at": "2021-07-20T17:39:09.611Z",
                "invoices": [
                    {
                        "p_id": 1,
                        "quantity": 2,
                        "product": {
                            "name": "2018 DEFENSE T-shirt",
                            "points": 100
                        }
                    },
                    {
                        "p_id": 2,
                        "quantity": 3,
                        "product": {
                            "name": "電路板",
                            "points": 200
                        }
                    }
                ]
            },
            {
                "id": 17,
                "sender": "eea2faf2ec64ae85df1da5a16348f053",
                "receiver": "SHOP_UID",
                "type": "shop",
                "points": 200,
                "created_at": "2021-07-20T18:11:24.141Z",
                "invoices": [
                    {
                        "p_id": 2,
                        "quantity": 1,
                        "product": {
                            "name": "電路板",
                            "points": 200
                        }
                    }
                ]
            }
          ]
        };
    }
};
</script>
