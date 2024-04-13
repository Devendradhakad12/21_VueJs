<script setup>
import { ref, watch } from "vue";
import WatchWithReactive from "./WatchWithReactive.vue";

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

fetchData();

watch(todoId, fetchData);
//watch(source,callback,options)
</script>

<template>
  <div>
    <h1>Watchers</h1>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
    <WatchWithReactive />
    <hr />
  </div>
</template>
