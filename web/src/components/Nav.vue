<template>
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-none lg:hidden">
        <label for="drawer-input" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        </label>
    </div> 
    <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">
        HITCON Shop</span>
        </div> 
        <div class="flex-1 px-2 mx-2">
        </div> 
        <div class="flex-1 lg:flex-none">
          <img style="" src="/scan_v2.png" width="32" height="32">
          <div style="margin-left:20px">Point: 2000</div>
          <img style="margin-left:20px" src="/user.png" width="32" height="32">
          <div style="margin-left:20px; margin-right:80px">Jim</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useCartStore } from "../store/cart"
import Search from './Search.vue'

const cartStore = useCartStore()

const count = computed(() => cartStore.count)
</script>
