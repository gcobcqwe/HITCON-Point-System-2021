<template>
  <div class="drawer">
    <input id="drawer-input" type="checkbox" class="drawer-toggle" />
    <div class="bg-base-100 text-base-content min-h-screen drawer-content">
      <Nav />
        <router-view></router-view>
    </div>
    <div class="drawer-side">
        <label for="drawer-input" class="drawer-overlay"></label> 
        <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <router-link to="/">首頁</router-link>
          </li> 
          <li>
            <router-link to="/transactions">點數管理</router-link>
          </li> 
          <li>
            <router-link to="/invoices">購買紀錄</router-link>
          </li> 
          <li>
            <router-link to="/redeem_codes">序號產生</router-link>
          </li> 
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue';
import Nav from './components/Nav.vue'
import { usePersistCart } from './shared/hooks';
import { useProductStore } from './store/products';
import { useUserStore } from './store/user';
const productStore = useProductStore()
const userStore = useUserStore()
const { proxy } = getCurrentInstance();
const token = proxy.$pointSystemToken;
userStore.addToken(token);
productStore.fetchAll()
usePersistCart()
</script>
