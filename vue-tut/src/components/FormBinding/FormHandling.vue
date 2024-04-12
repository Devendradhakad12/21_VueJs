<script setup>
import { ref } from "vue";

const text = ref("");

const handleSubmit = () => {
  alert(text.value);
};
</script>

<template>
  <div>
    <h1>--Two way binding (Form Handling)</h1>
    <input v-model="text" placeholder="Type here" />
    <p>{{ text }}</p>
    <button @click="handleSubmit">Submit</button>
    <hr />
  </div>
</template>
