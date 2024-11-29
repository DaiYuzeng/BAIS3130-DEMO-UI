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
        Dashboard
      </router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'teetime-list'}"
        class="text-gray-700 hover:text-blue-600"
        active-class="text-blue-600 font-bold"
      >
      Tee Time
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
