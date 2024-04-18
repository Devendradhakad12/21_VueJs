<script setup>
import { ref } from "vue";
import ComponentOne from "./ComponentOne.vue";
import ComponentTwo from "./ComponentTwo.vue";
import ComponentThree from "./ComponentThree.vue";

const currentTab = ref("ComponentOne");
const tabs = {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
};
</script>

<template>
  <div>
    <h1>--Dynamic Component</h1>
    <button @click="currentTab = 'ComponentOne'">What is HTML?</button>
    <button @click="currentTab = 'ComponentTwo'">What is CSS?</button>
    <button @click="currentTab = 'ComponentThree'">What is JSf?</button>

    <!-- Dynamic Component -->
    <component :is="tabs[currentTab]" />
    <hr />
  </div>
</template>
