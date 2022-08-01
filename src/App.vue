<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Login from "./pages/login.vue";
import Home from "./pages/home.vue";
import TestComponent from "./components/test.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

// Store properties
const store = useStore();
const user_detail = computed(() => {
  return store.state.user.detail;
});

</script>

<template>
  <!-- <TestComponent /> -->
 <component :is="user_detail ? Home : Login" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

