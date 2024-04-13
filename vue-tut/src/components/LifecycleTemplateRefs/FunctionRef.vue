<script setup>
const myRefFunc = (el) => {
  console.log("func ref", el.textContent);
  el.style.background = "blue";
};
</script>

<template>
  <h3>function ref</h3>
  <p :ref="myRefFunc">This initial value</p>
</template>
