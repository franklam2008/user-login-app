<script setup lang="ts">
import qs from "qs";
import axios from "axios";
import { useStore } from "vuex";
const store = useStore();
function logout(replaceEmail?: string) {
const API_URL = "http://127.0.0.1:5000";
  const url = `${API_URL}/login/`;
  const data = { email: '', password: '' };
  const requestConfig = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
    url,
    withCredentials: true,
  };
  axios(requestConfig)
    .then((res) => {
      whoami();
    })
    .catch((err) => {
      store.dispatch("saveName", "Unknown");
      store.dispatch("loadedUser", null);
      console.warn(err);
    });
}
</script>

<template>
  <button @click="logout">logout</button>
</template>