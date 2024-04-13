<script setup>
import { defineProps } from "vue";
defineProps({
  msg: {
    type: String,
    required: true,
    default:"No props passed yet" 

  },
});

let emit = defineEmits(["response"]);
emit("response", "hello from child");
</script>

<template>
  <div>
    <h1>--Props and Emits</h1>
    <h2>{{ msg}}</h2>
    <p>Props are immutable</p>
  </div>
</template>
