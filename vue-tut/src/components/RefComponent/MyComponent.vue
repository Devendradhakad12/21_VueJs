<script setup>
import { ref, defineExpose } from "vue";

/*  When using the <script setup>
 -It's private by default
 -A parent referencing a child won't be able to access anything

  first we have to expose all the properties and methods
  then we'd be able to use them in parent component
  - use (defineExpose) to expose our data for parent to use
 */

const count = ref(10);
const inc = () => count.value++;
const dec = () => count.value--;

defineExpose({ count, inc, dec });
</script>

<template>
  <div>
    <h3>Count {{ count }}</h3>
    <button @click="inc">Inc</button>
    <button @click="dec">Dec</button>
  </div>
</template>
