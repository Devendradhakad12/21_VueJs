<script setup>
import { ref } from "vue";
let count = ref(0);
const incrementCounter = () => count.value++;
const decrementCounter = () => count.value--;

const submitHandler = (e) => {
  e.preventDefault();
  alert("hello form submited");
};
const showMessage = (msg) => {
  alert(msg);
};
</script>

<template>
  <div>
    <h1>--Events</h1>
    <p>Count : {{ count }}</p>
    <div>
      <button v-on:click="count++">Increment</button>
      <button @:click="count--">Decrement</button>
    </div>
    <div>
      <button v-on:click="incrementCounter">Increment</button>
      <button @:click="decrementCounter">Decrement</button>
    </div>

    <!-- form -->
    <form @:submit="submitHandler">
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
    <button type="button" @click="showMessage('hello')">Show Message</button>
    <hr />
  </div>
</template>
