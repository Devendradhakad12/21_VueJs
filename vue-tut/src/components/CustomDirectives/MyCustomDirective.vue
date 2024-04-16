<script setup>
const vFormateDiv = {
  mounted: (el, binding) => {
    console.log(el);
    console.log(binding);
    console.log(binding.arg);
    el.style.fontSize = `${binding.value}px`;
  },
};
</script>

<template>
  <div>
    <h1>--Custom Directive</h1>
    <p v-formate-div="40">Hello custom d</p>
    <h3 v-formate-div:dev>Hello custom d</h3>
    <hr>
  </div>
</template>
