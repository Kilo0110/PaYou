<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="wrapper bg-parent">
    <RouterView />  
  </div>
</template>

<style>
@import '@/assets/main.css'
</style>
