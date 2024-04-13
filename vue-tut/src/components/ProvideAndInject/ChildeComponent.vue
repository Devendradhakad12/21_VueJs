<script setup>
import { inject } from "vue";
const dataForChildComponent = inject("dataForChildComponent");
</script>

<template>
  <div>
    <h3>Data from parent component</h3>
    <p>{{ dataForChildComponent }}</p>
  </div>
</template>
