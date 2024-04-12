<script setup>
const myMesage = "This msg from js";
function add(x,y){
   return x+y
}
</script>

<template>
  <div>
    <p>{{ myMesage }}</p>
    <h2>{{ add(2,4) }}</h2>
  </div>
</template>
