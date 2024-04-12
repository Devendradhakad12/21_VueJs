<script setup>
import { reactive } from "vue";
const number = reactive({ count: 0 }); // primitive data types are not allowed
</script>

<template>
  <div>
    <h1>--Reactive (declarative rendering)</h1>
    Count : {{ number.count }} <button @click="number.count +=10">Inc</button>
    <p>
      reactive() only works on objects (including arrays and built-in types like
      Map and Set)
    </p>
    <hr />
  </div>
</template>
