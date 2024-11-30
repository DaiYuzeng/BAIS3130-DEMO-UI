<template>
  <div class="overflow-x-auto w-full">
    <div class="flex flex-row justify-between">
      <div>
        <button class="bg-blue-500 text-white mb-2 px-2 py-1 rounded hover:bg-blue-600" v-if="displayBtn" @click="switchTable">
          {{ displayStanding ? 'Show Regular' : 'Show Standing' }}
        </button>
      </div>
      <router-link :to="{name: 'teetime-create'}">
        <button class="bg-blue-500 text-white mb-2 px-2 py-1 float-right rounded hover:bg-blue-600">Create</button>
      </router-link>
    </div>
    
    <table v-if="!displayStanding" class="table-auto w-full border-collapse border border-gray-200">
      <!-- Table Header -->
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 text-left border border-gray-300">#</th>
          <th class="px-4 py-2 text-left border border-gray-300">Member Name</th>
          <th class="px-4 py-2 text-left border border-gray-300">Date</th>
          <th class="px-4 py-2 text-left border border-gray-300">Player Count</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <tr v-for="(teetime, index) in filteredList" :key="index" class="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">{{ teetime.TeeTimeId }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.MemberName }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.StartDate }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.PlayerCount }}</td>
        </tr>
      </tbody>
    </table>

    <table v-else class="table-auto w-full border-collapse border border-gray-200">
      <!-- Table Header -->
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 text-left border border-gray-300">#</th>
          <th class="px-4 py-2 text-left border border-gray-300">Member Name</th>
          <th class="px-4 py-2 text-left border border-gray-300">Start Date</th>
          <th class="px-4 py-2 text-left border border-gray-300">End Date</th>
          <th class="px-4 py-2 text-left border border-gray-300">Requested Day</th>
          <th class="px-4 py-2 text-left border border-gray-300">Requested Time</th>
          <th class="px-4 py-2 text-left border border-gray-300">Member List</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <tr v-for="(teetime, index) in filteredList" :key="index" class="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">{{ teetime.TeeTimeId }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.MemberName }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.StartDate }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.EndDate }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.RequestedDay }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.RequestedTime }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ teetime.MemberList }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoleStore } from '@/stores/role';
import { ref, computed, watch, getCurrentInstance, onMounted } from 'vue';
import ROLES from '@/constants/role';

const { proxy } = getCurrentInstance();

const roleStore = useRoleStore();
const currentRole = computed(() => roleStore.currentRole);
const displayBtn = computed(() => currentRole.value.name === 'Shareholder');
const teetimeList = ref([]);
const filteredList = ref([]);

const displayStanding = ref(false);

watch(
  () => [teetimeList.value, displayStanding, currentRole],
  () => {
    filterTable()
  },
  { deep: true }
)

watch(
  () => currentRole,
  () => {
    displayStanding.value = false;
  },
  { deep: true }
)

onMounted(async () => {
  const result = await proxy.$axios.get('/teetimes')

  teetimeList.value = result.data;
})

function switchTable() {
  displayStanding.value = !displayStanding.value
}

function formattedTime(isoTime) {
  const date = new Date(isoTime);
  
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function filterTable() {
  filteredList.value = teetimeList.value.filter(item => {
    return item.Type === (displayStanding.value ? 'Standing' : 'Regular') && item.MemberId+'' === currentRole.value.memberId
  });

  if (displayStanding) {
    filteredList.value.forEach(item => {
      item.MemberName = ROLES.USER_ROLES.find(role => role.memberId === item.MemberId+'').label
      item.StartDate = formattedTime(item.StartDate)
      item.EndDate = formattedTime(item.EndDate)
    })
  } else {
    filteredList.value.forEach(item => {
      item.MemberName = ROLES.USER_ROLES.find(role => role.memberId === item.MemberId+'').label
      item.StartDate = formattedTime(item.StartDate)
    })
  }
  
}
</script>

<style scoped>
/* No additional styles required; Tailwind handles styling */
</style>


<style>
</style>
