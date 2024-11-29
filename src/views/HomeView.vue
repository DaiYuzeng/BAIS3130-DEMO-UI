<script setup lang="ts">
import { computed } from 'vue';
import { useRoleStore } from '@/stores/role';

// Access the Pinia role store
const roleStore = useRoleStore();
const currentRole = computed(() => roleStore.currentRole);

// Define a mapping of roles to member names
const memberNames = {
  Shareholder: 'Yuzeng',
  Gold: 'John',
  Silver: 'Jane',
  Bronze: 'Alex',
  Cooper: 'Chris',
};

</script>

<template>
  <h2>
    Welcome, <span :class="currentRole.color" class="px-2 py-1 rounded text-white">{{ currentRole.name }}</span> Member, {{ memberNames[currentRole.name] }}
  </h2>
</template>
