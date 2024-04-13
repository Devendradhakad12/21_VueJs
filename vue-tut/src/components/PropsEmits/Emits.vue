<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
</script>

<template>
  <div>
    <h2>Emits</h2>
    <form @submit.prevent="$emit('submitHandler', username, password)">
      <input type="text" placeholder="name" v-model="username" />
      <input type="password" placeholder="password" v-model="password" />
      <button>Submit</button>
    </form>
  </div>
</template>
