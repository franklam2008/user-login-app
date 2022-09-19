<script setup lang="ts">
import { ref } from "vue";
import qs from "qs";
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
const store = useStore();
const user_detail = computed(() => {
  return store.state.user.detail;
});
const student_list = computed(() => {
  return store.state.user.student_list;
});
const env = import.meta.env;
// const API_URL = env.VITE_STUDENT_API_URL_LOCAL;
const API_URL = env.VITE_STUDENT_API_URL_PROD;

function logout(replaceEmail?: string) {
  const url = `${API_URL}/login/`;
  const data = { email: "", password: "" };
  const requestConfig = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
    url,
    withCredentials: true,
  };
  axios(requestConfig).catch((err) => {
    store.dispatch("saveName", "Unknown");
    store.dispatch("loadedUser", null);
    console.warn(err);
  });
}
function getStudents() {
  const url = `${API_URL}/students/`;
  axios
    .get(url, { withCredentials: true })
    .then((res) => {
      store.dispatch("loadedStudentList", res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
}
</script>

<template>
  <p>Logged in as: {{ user_detail?.username }}</p>
  <p>Detail: {{ user_detail }}</p>

  <div v-if="student_list?.length">
    <li v-for="stu in student_list">
      {{ stu }}
    </li>
  </div>

  <button @click="logout()">logout</button>
  <button type="button" @click="getStudents">Student list</button>

</template>
