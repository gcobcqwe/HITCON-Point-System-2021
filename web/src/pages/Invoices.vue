<template>
  <div class="p-4 max-w-7xl mx-auto">
    <Invoices :invoices="invoices"/>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Invoices from '../components/Invoices.vue'
import { useInvoiceStore } from '../store/invoices'
const invoiceStore = useInvoiceStore()
invoiceStore.fetchAll()
const invoices = computed(() => invoiceStore.list)
</script>
