<script setup>
import { ref } from "vue";

const awesome = ref(true);

const isShow = ref(true);

function toggle() {
  awesome.value = !awesome.value;
  isShow.value = !isShow.value;
}
</script>

<template>
  <div>
    <h1>--Conditional Rendering</h1>
    <button @click="toggle">toggle</button>
    <h2 v-if="awesome">Vue is awesome!</h2>
    <h2 v-else>Oh no 😢</h2>
    <h2 v-show="isShow">
      Is Show 🙋(When You Click on toggle button it's style will set to
      display:"none")
    </h2>
    <hr />
  </div>
</template>
