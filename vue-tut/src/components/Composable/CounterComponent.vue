<script setup>
import { useCounter } from "@/Composable/useCounterComposable";
const counter = useCounter();
</script>
<template>
  <div>
    <h1>--Composable</h1>
    <h4>Count {{ counter.count }}</h4>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
    <hr />
  </div>
</template>
