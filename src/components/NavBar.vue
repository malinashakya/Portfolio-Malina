<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/experience">Experience</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar a {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
}

.navbar a:hover {
  color: #1abc9c;
}
</style>
<script setup lang="ts"></script>
