<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import qs from "qs";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

// defineProps<{ msg: string }>();

// Store properties
const store = useStore();
const username = computed(() => {
  return store.state.user.name;
});

// Component properties
const email = ref("frank@gmail.com");
const password = ref("1234qwer");
const API_URL = "http://127.0.0.1:5000";
// const API_URL = "https://franklam2008.pythonanywhere.com";

// Service calls
function submit(replaceEmail?: string) {
  const url = `${API_URL}/login/`;
  const data = { email: replaceEmail || email.value, password: password.value };
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
      console.warn(err);
    });
}
function whoami() {
      console.log('!!whoami');
  const url = `${API_URL}/whoami/`;
  axios
    .get(url, { withCredentials: true })
    .then((res) => {
      store.dispatch("saveName", res.data.username);
      store.dispatch("loadedUser", res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
}
function getStudents() {
  const url = `${API_URL}/students/`;
  axios
    .get(url, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
}

// component on init
whoami();
</script>

<template>
  <h2>User Login with JWT</h2>
  <p>Logged in as: {{ username }}</p>
  <div class="form-group">
    <input v-model="email" placeholder="edit me" />
    <input v-model="password" type="password" placeholder="edit me" />
    <button type="button" @click="submit()">Submit</button>
    <button type="button" @click="getStudents">Student list</button>
  </div>
</template>

<style scoped>
.form-group {
  margin: 0 auto;
  width: 200px;
  display: flex;
  flex-direction: column;
}
.form-group button {
  margin-top: 20px;
}
</style>
