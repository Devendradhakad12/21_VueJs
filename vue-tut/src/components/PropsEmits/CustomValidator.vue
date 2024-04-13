<script setup>
import { defineProps } from "vue";
defineProps({
  name: {
    type: String,
    validator: (propValue) => {
      return ["dev", "pavan", "ajay"].includes(propValue);
    },
  },
});
</script>

<template>
  <div>
    <h2>custom validator</h2>
    {{ name }}
  </div>
</template>
