<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./views/NavBar.vue";
</script>

<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <RouterView />
  </div>
</template>
