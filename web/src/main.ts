import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import { createPinia } from "pinia";
import router from "./routes";
import App from "./App.vue";

import "./assets/styles/tailwind.css";

const app = createApp(App);
app.use(createPinia());
app.use(VueCookieNext);
app.use(router);
app.mount("#app");
