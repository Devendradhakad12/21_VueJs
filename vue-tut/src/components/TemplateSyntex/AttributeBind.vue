<!-- Attribute binding -->

<script setup>
const myPortfolio = "https://devendra-dhakad-portfolio.vercel.app/";
const img = "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png";
const height = "300px";
const width = "400px";
</script>

<template>
  <div>
    <h1>--Attribute Binding</h1>
    <a v-bind:href="myPortfolio">Dev Portfolio</a>
    <br />
    <a :href="myPortfolio">Dev Portfolio</a>
    <br />
    <img :src="img" :height="height" :width="width" />
    <hr>
  </div>
</template>
