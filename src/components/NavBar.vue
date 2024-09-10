<template>
  <Menubar :model="items">
    <template #item="{ item }">
      <router-link v-if="item.route" :to="item.route" v-slot="{ navigate }">
        <Button
          as="a"
          :href="item.route"
          @click="navigate"
          class="menu-item p-button p-component p-button-outlined"
        >
          {{ item.label }}
        </Button>
      </router-link>
      <Button
        v-else
        as="a"
        :href="item.url"
        :target="item.target"
        class="menu-item p-button p-component"
      >
        {{ item.label }}
      </Button>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

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
  background-color: #23405e;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-item {
  color: #ecf0f1;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.menu-item:active,
.menu-item:hover {
  color: #0db1da !important; /* Ensure the color stays as intended */
  outline: none; /* Remove any focus outline if necessary */
}
</style>
