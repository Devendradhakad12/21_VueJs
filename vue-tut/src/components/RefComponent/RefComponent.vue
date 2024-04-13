<script setup>
import MyComponent from "./MyComponent.vue";
import { onMounted, ref } from "vue";

const myRef = ref(null);
onMounted(() => {
  console.log(myRef.value);
});
</script>

<template>
  <div>
    <h1>--Ref Component</h1>
    <MyComponent ref="myRef" />
    <hr />
  </div>
</template>
