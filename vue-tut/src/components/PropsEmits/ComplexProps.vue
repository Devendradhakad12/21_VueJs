<script setup>
import { defineProps } from "vue";
defineProps({
  friends: Array,
  userInfo: Object,
});
</script>

<template>
  <div>
    <h2>Complex prop</h2>
    <h3>Friends</h3>
    <!-- Array -->
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        {{ friend }}
      </li>
    </ul>

    <!-- Object -->
    <ul>
      <li v-for="(info, i) in userInfo" :key="i">
        {{ info }}
      </li>
    </ul>
  </div>
</template>
