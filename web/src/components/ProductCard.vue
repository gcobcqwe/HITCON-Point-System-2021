<template>
    <div class="card bordered ">
        <figure class="px-8 pt-10">
            <img
                :src="product.image_url"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure> 
        <div class="card-body">
            <h2 class="card-title">
                <div>{{ product.name }}</div>
            </h2>
            <p>{{ toPoint(product.points) }}</p>
            <p>{{ `剩餘數量: ${product.quantity}` }}</p>
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
import { toPoint } from '../shared/utils'

const cartStore = useCartStore()
const props = defineProps<{
    product: Product
}>();
</script>