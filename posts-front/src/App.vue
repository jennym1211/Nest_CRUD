<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./views/NavBar.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <RouterView />
</template>
