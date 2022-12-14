import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import store from "./store";
import "./assets/css/tailwind.css"

createApp(App).use(VueCookies).use(store).mount("#app");
