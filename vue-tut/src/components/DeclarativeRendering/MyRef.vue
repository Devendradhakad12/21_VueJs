<script setup>
import { ref } from "vue";
const number = ref({ count: 0 }); // every kind of data types allowed
const name = ref("Dev Dhakad");
const handleChangeName = () => {
  name.value = "Pavan Dk";
};
</script>

<template>
  <div>
    <h1>--Ref (declarative rendering)</h1>
    Count : {{ number.count }} <button @click="number.count += 10">Inc</button>
    <p>Name : {{ name }}</p>

    <button @click="handleChangeName">Change</button>
    <hr />
  </div>
</template>
