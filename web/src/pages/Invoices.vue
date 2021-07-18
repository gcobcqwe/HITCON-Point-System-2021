<template>
  <div class="p-4 max-w-7xl mx-auto">
    <Invoices />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Invoices from '../components/Invoices.vue'
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart';
import { toPoint } from '../shared/utils'

const productStore = useProductStore()


const cartStore = useCartStore()
const formattedCart = computed(() => cartStore.formattedCart)
</script>
