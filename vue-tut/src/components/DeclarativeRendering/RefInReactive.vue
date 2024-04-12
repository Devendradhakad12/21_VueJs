<script setup>
import { reactive, ref } from "vue";
const Users = reactive([ref("dev"), ref("pavan")]); // primitive data types are not allowed
</script>

<template>
  <div>
    <h1>-- Ref Inside Reactive (declarative rendering)</h1>
    users : {{ Users.at(0).value }}
    <button @click="Users.at(0).value = 'deepak'">Change</button>
    <hr />
  </div>
</template>
