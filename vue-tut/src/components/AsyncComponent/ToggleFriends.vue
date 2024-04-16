<script setup>
import { ref, defineAsyncComponent } from "vue";
const RenderFriends = defineAsyncComponent(() => import("./RenderFriends.vue"));
let showFriends = ref(false);
const toggleFriends = () => (showFriends.value = !showFriends.value);
</script>

<template>
  <h1>--Async Component</h1>
  <div v-if="showFriends">
    <RenderFriends />
  </div>
  <button @click="toggleFriends">Toggle Friends</button>
  <hr />
</template>
