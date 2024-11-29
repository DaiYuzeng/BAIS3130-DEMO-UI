<template>
  <header class="flex flex-row justify-between bg-blue-600 text-white p-4">
    <h1 class="text-xl font-bold">BAIST Tee Time Club</h1>
    <div>
      <!-- Shareholder Button -->
      <button
        class="text-white px-2 py-1 rounded"
        :class="getRoleClass('Shareholder')"
        @click="switchRole('Shareholder')"
      >
        ShareHolder
      </button>
      <!-- Gold Button -->
      <button
        class="text-white px-2 py-1 rounded ml-2"
        :class="getRoleClass('Gold')"
        @click="switchRole('Gold')"
      >
        Gold
      </button>
      <!-- Silver Button -->
      <button
        class="text-white px-2 py-1 rounded ml-2"
        :class="getRoleClass('Silver')"
        @click="switchRole('Silver')"
      >
        Silver
      </button>
      <!-- Bronze Button -->
      <button
        class="text-white px-2 py-1 rounded ml-2"
        :class="getRoleClass('Bronze')"
        @click="switchRole('Bronze')"
      >
        Bronze
      </button>
      <!-- Cooper Button -->
      <button
        class="text-white px-2 py-1 rounded ml-2"
        :class="getRoleClass('Cooper')"
        @click="switchRole('Cooper')"
      >
        Cooper
      </button>
    </div>
  </header>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoleStore } from '@/stores/role';
import ROLES from '@/constants/role'

// Access the Pinia role store
const roleStore = useRoleStore();
const currentRole = computed(() => roleStore.currentRole);
const { switchRole } = roleStore;

// Compute the dynamic class for role buttons
function getRoleClass(roleName: string) {
  const out = []

  if (currentRole.value.name === roleName) {
    out.push(currentRole.value.color)
  }
      
  return out
}
</script>
