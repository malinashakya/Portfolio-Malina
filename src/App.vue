<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue';
</script>

<style>
body{
 padding: 0;
  margin: 0;
}
</style>
