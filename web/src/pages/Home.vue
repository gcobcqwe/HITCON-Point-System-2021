<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCardSkeleton v-show="!productStore.loaded" v-for="n in 15" :key="n" />
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div style="margin-top:30px; margin-bottom:20px">
        <div class="text-right text-2xl md:text-4xl" style="height: 100px;line-height: 100px;text-align: center;border: 2px dashed #f69c55;">Total: {{ toPoint(cartStore.total) }}</div>
    </div>
    <button class="btn btn-primary" style="height: 100%; width: 100%;" @click="">購買</button>
  </div>
</template>
<script setup lang="ts">
import { useCookie } from 'vue-cookie-next'
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import ProductCardSkeleton from '../components/ProductCardSkeleton.vue'
import { useProductStore } from '../store/products'
import { useCartStore } from '../store/cart';
import { toPoint } from '../shared/utils'

const productStore = useProductStore()

const products = computed(() => productStore.list)

const cartStore = useCartStore()
const formattedCart = computed(() => cartStore.formattedCart)
const { setCookie, removeCookie, getCookie } = useCookie()
setCookie('test', '123');
console.log(getCookie('point_system_token'));

</script>
