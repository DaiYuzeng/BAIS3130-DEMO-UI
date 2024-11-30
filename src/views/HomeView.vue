<script setup lang="ts">
import { computed } from 'vue';
import { useRoleStore } from '@/stores/role';

// Access the Pinia role store
const roleStore = useRoleStore();
const currentRole = computed(() => roleStore.currentRole);

</script>

<template>
  <h2>
    Welcome, <span :class="currentRole.color" class="px-2 py-1 rounded text-white">{{ currentRole.name }}</span> Member, {{ currentRole.label }}
  </h2>
</template>
