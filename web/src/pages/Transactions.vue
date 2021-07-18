<template>
  <div class="p-4 max-w-7xl mx-auto">
    <Transactions />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Transactions from '../components/Transactions.vue'
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart';
import { toPoint } from '../shared/utils'

const productStore = useProductStore()


const cartStore = useCartStore()
const formattedCart = computed(() => cartStore.formattedCart)
</script>
