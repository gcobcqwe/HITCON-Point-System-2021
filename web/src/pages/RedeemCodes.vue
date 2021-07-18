<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div style="margin-top:30px; margin-bottom:20px">
      <div class="text-right text-2xl md:text-4xl" style="height: 100px;line-height: 100px;text-align: center;border: 2px dashed #f69c55;">
          <input type="text" placeholder="Points" class="input input-bordered">
          <button style="margin-left:30px;" class="btn btn-primary" @click="">序號生產</button>
      </div>
    </div>
    <RedeemCodes />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import RedeemCodes from '../components/RedeemCodes.vue'
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart';
import { toPoint } from '../shared/utils'

const productStore = useProductStore()


const cartStore = useCartStore()
const formattedCart = computed(() => cartStore.formattedCart)
</script>
