import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueCookies from "vue-cookies";

createApp(App).use(VueCookies).mount("#app");
