import { ref } from 'vue';
import { defineStore } from 'pinia';
import ROLES, { type Role } from '@/constants/Role';

export const useRoleStore = defineStore('role', () => {
  // Initialize the current role as the first role in USER_ROLES
  const currentRole = ref<Role>(ROLES.USER_ROLES[0]);

  // Action to switch the current role
  function switchRole(roleName: string) {
    const newRole = ROLES.USER_ROLES.find(role => role.name === roleName);
    
    if (newRole) {
      currentRole.value = newRole;
    }
  }

  return { currentRole, switchRole };
});