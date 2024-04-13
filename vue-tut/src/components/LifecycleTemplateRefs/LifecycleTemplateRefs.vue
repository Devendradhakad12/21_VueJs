<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const pElementRef = ref("hello");
const temRefEl = ref("i  m temp ref");

onBeforeMount(() => {
  console.log("component is about to be mounted (onBeforeMount)");
});

onMounted(() => {
  console.log("component has been mounted (onMounted)");
  temRefEl.value.textContent = "mounted!";
  console.log(temRefEl.value);
});

onBeforeUpdate(() => {
  console.log("component is about to be updated (onBeforeUpdate)");
});

onUpdated(() => {
  console.log("component has been updated (onUpdated)");
});

onBeforeUnmount(() => {
  console.log("component is about to be unmounted (onBeforeUnmount)");
});

onUnmounted(() => {
  console.log("component has been unmounted (onUnmounted)");
});

const updatedP = () => {
  pElementRef.value = "updated!";
};
</script>

<template>
  <div>
    <h1>--Lifecycle And Template Ref</h1>
    <p ref="temRefEl">hello</p>
    {{ pElementRef }}
    <button @click="updatedP">Update</button>
  </div>
</template>
