<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutHeader from './components/Header.vue'
import LayoutNav from './components/Nav.vue'
import LayoutFooter from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
   <LayoutHeader /> 

    <div class="flex flex-1">
      <!-- Left Navigation -->
      <nav class="bg-gray-200 w-64 p-4 hidden lg:block">
        <LayoutNav />
      </nav>

      <!-- Main Content -->
      <main class="flex-1 p-6 bg-gray-100 flex">
        <!-- Vue Router View -->
        <RouterView />
      </main>
    </div>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<style scoped>

</style>
