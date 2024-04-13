<script setup>
import { ref } from "vue";

const text = ref("");

const handleSubmit = () => {
  alert(text.value);
  text.value = "";
};
</script>

<template>
  <div>
    <h1>--Two way binding (Form Handling)</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="text" placeholder="Type here" />
      <button>Submit</button>
    </form>
    <p>{{ text }}</p>
    <hr />
  </div>
</template>
