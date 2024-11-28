<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <ul class="space-y-2">
    <li>
      <router-link
        :to="{ name: 'home'}"
        class="text-gray-700 hover:text-blue-600"
        active-class="text-blue-600 font-bold"
      >
        Home
      </router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'about'}"
        class="text-gray-700 hover:text-blue-600"
        active-class="text-blue-600 font-bold"
      >
      About
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
