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
  methods: {
    invoicesFormatter(invoices) {
      let text = invoices.map(invoice => `${invoice.product.name} * ${invoice.quantity} = ${invoice.product.points*invoice.quantity} Points`).join(', ')
      console.log(text)
      return text
    }
  },
  props: {
    invoices: Array,
  },
  setup() {},
};
</script>
