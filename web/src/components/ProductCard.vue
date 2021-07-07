<template>
    <div class="card bordered ">
        <figure class="px-8 pt-10">
            <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure> 
        <div class="card-body">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <div class="btn-group">
                    <button class="btn btn-primary" @click="cartStore.remove(product.id)">-</button>
                    <button class="btn btn-ghost no-animation">{{ cartStore.countProduct(product.id) }}</button>
                    <button class="btn btn-primary" @click="cartStore.add(product.id)">+</button>
                </div>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products'
import { toCurrency } from '../shared/utils'

const cartStore = useCartStore()
const props = defineProps<{
    product: Product
}>();
</script>