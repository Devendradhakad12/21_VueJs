<!-- Dynamically Binding -->

<script setup>
const imageInfo = {
  src: "https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg",
  height: "250px",
  width: "500px",
};
</script>

<template>
  <div>
    <h1>--Dynamically Binding</h1>
    <img v-bind:="imageInfo" />
    <hr />
  </div>
</template>
