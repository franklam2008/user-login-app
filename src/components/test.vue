<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    getCookie() {
      console.log("get ENCODED_TOKEN", this.$cookies.get("ENCODED_TOKEN"));
      console.log("get USERNAME", this.$cookies.get("USERNAME"));
    },
    setCookie() {
      this.$cookies.remove("ENCODED_TOKEN");
      this.$cookies.remove("USERNAME");
      // this.$cookies.set("USERNAME", "test");
      console.log("get ENCODED_TOKEN", this.$cookies.get("ENCODED_TOKEN"));
      console.log("get USERNAME", this.$cookies.get("USERNAME"));
    },
  
  },
});
</script>

<template>
  <p>Cookies</p>
  <div>
    <button type="button" @click="getCookie">getCookie</button>
    <!-- <button type="button" @click="setCookie">setCookie</button> -->
  </div>
</template>
<style scoped>
div {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 200px;
}
button {
  margin-top: 20px;
}
</style>
