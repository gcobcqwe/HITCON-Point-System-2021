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
        <div class="items-stretch hidden lg:flex">
            <router-link class="btn btn-ghost btn-sm rounded-btn" to="/">
                首頁
            </router-link> 
            <router-link class="btn btn-ghost btn-sm rounded-btn" to="/transactions">
                點數管理
            </router-link> 
            <router-link class="btn btn-ghost btn-sm rounded-btn" to="/invoices">
                購買紀錄
            </router-link> 
            <router-link class="btn btn-ghost btn-sm rounded-btn" to="/redeem_codes">
                序號生產
            </router-link> 
        </div> 
        </div> 
        <div class="flex-1 lg:flex-none">
          <img style="" src="/scan.png" width="32" height="32">
          <div style="margin-left:20px">Point: 2000</div>
          <img style="margin-left:20px" src="/user.png" width="32" height="32">
          <div style="margin-left:20px; margin-right:80px">eea2faf2ec64ae85df1da5a16348f053</div>
        </div>
    </div>
</template>
