import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import store from "./store";

createApp(App).use(VueCookies).use(store).mount("#app");
