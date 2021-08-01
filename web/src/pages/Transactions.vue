<template>
  <div class="p-4 max-w-7xl mx-auto">
    <Transactions :transactions="transactions"/>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Transactions from '../components/Transactions.vue'
import { useTransactionStore } from '../store/transactions'
const transactionStore = useTransactionStore()
transactionStore.fetchAll()
const transactions = computed(() => transactionStore.list)
</script>
