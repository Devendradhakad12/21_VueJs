<script setup>
import { ref } from "vue";
const friends = ref(["dev", "ajay", "deepak", "deeksha"]);
</script>

<template>
  <h3 v-for="(friend, i) in friends" :key="i">
    {{ friend }}
  </h3>
</template>
