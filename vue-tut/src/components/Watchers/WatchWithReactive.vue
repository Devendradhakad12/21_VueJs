<script setup>
import { reactive, ref, watch } from "vue";

const todoData = reactive({ title: "first todo" });

// you have to provide entire reactive data
/* watch(todoData, (newValue, oldValue) => {
  // if you are using "object" both the new and old values will be the same
  console.log("new Value", newValue);
  console.log("old Value", oldValue);
  // now if you want to get the old and the new value separately for that you will have to pass a getter function
  //& here we have to specify the actual object/state "property"
  // check the below example
}); */
watch(
  () => todoData.title,
  (newValue, oldValue) => {
    console.log("new Value", newValue);
    console.log("old Value", oldValue);
  }
);

const username = ref("dev");
const age = ref(20);
watch([username, age], (newValue, oldValue) => {
  console.log("new Value", newValue);
  console.log("old Value", oldValue);
});
const handleChangeName = () => {
  username.value = "pavan";
};
const handleChangeAge = () => {
  age.value = 32;
};
</script>

<template>
  <div>
    <h2>Watch With Reactive</h2>
    <p>Title: {{ todoData.title }}</p>
    <button @click="todoData.title = 'title updated'">Change Title</button>
    <p>Name : {{ username }}</p>
    <p>Age : {{ age }}</p>
    <button @click="handleChangeName">Change Name</button>
    <button @click="handleChangeAge">Change Age</button>

    <hr />
  </div>
</template>
