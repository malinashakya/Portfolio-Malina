<template>
  <!-- Menubar component with dynamic items -->
  <Menubar :model="items">
    <template #item="{ item }">
      <!-- Conditional rendering for routes and external links -->
      <router-link v-if="item.route" v-slot="{ navigate }" :to="item.route">
        <Button
          :href="item.route"
          as="a"
          class="menu-item p-button p-component p-button-outlined"
          @click="navigate"
        >
          {{ item.label }}
        </Button>
      </router-link>
      <Button
        v-else
        :href="item.url"
        :target="item.target"
        as="a"
        class="menu-item p-button p-component"
      >
        {{ item.label }}
      </Button>
    </template>
  </Menubar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

// Define the menu items
const items = ref([
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Projects', route: '/projects' },
  { label: 'Experience', route: '/experience' },
  { label: 'Contact', route: '/contact' }
])
</script>

<style scoped>
.p-menubar {
  background-color: #23405e; /* Background color for the menubar */
  padding: 1rem; /* Padding inside the menubar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect for menubar */
}

.menu-item {
  color: #ecf0f1; /* Text color for menu items */
  font-weight: bold; /* Bold font for menu items */
  font-size: 1.4rem; /* Font size for menu items */
  font-family: 'Roboto', sans-serif; /* Font family for menu items */
  margin-right: 1rem; /* Space between menu items */
  padding: 0.5rem 1rem; /* Padding inside menu items */
  background: none; /* Remove default background */
  border: none; /* Remove default border */
  cursor: pointer; /* Pointer cursor on hover */
  text-decoration: none; /* Remove underline from links */
}

.menu-item:active,
.menu-item:hover {
  color: #0db1da !important; /* Color change on hover and active state */
  outline: none; /* Remove outline on focus */
}
</style>
