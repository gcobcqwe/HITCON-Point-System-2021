import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Transactions from "./pages/Transactions.vue";
import Invoices from "./pages/Invoices.vue";
import RedeemCodes from "./pages/RedeemCodes.vue";

// TODO: history transactions and scanner
const routes = [
  { path: "/", component: Home },
  { path: "/transactions", component: Transactions },
  { path: "/invoices", component: Invoices },
  { path: "/redeem_codes", component: RedeemCodes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
