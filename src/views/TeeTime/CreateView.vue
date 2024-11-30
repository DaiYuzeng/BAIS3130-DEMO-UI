<template>
  <div class="container mx-auto bg-blue-50 h-full">
    <div
        v-if="validationMessage"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >

    </div>
    <div class="bg-white p-8 shadow-lg rounded-lg w-full flex-1">
      <h1 class="text-2xl font-bold mb-2">Book Tee Time</h1>
      <p class="text-gray-600 mb-6">Book Standing or Regular Tee Time</p>

      <div
        v-if="currentRole.name !== 'Shareholder' && currentRole.name !== 'Cooper'"
        class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
        You are currently unable to request standing tee time. Please upgrade to Shareholder Membership to unlock this feature.
      </div>

      <div
        v-if="currentRole.name === 'Cooper'"
        class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
      You are currently unable to book any tee times. Please upgrade to Silver Membership to unlock this feature.
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Type Dropdown -->
        <div class="mb-4">
          <label for="type" class="block text-gray-700 font-medium mb-2">Type</label>
          <select
            id="type"
            v-model="form.type"
            :disabled="disabledType || disabledForm"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Regular">Regular</option>
            <option value="Standing">Standing</option>
          </select>
        </div>

        <!-- Date Picker -->
        <div v-if="isStanding">
          <div class="mb-4">
            <label for="startDate" class="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              id="startDate"
              type="date"
              v-model="form.startDate"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="endDate" class="block text-gray-700 font-medium mb-2 mt-4">End Date</label>
            <input
              id="endDate"
              type="date"
              v-model="form.endDate"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="mb-4">
            <label for="requestedDay" class="block text-gray-700 font-medium mb-2 mt-4">Requested Day</label>
            <select
              id="requestedDay"
              v-model="form.requestedDay"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="requestedTime" class="block text-gray-700 font-medium mb-2 mt-4">Requested Time</label>
            <input
              id="requestedTime"
              type="time"
              v-model="form.requestedTime"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="mb-4">
            <label for="memberList" class="block text-gray-700 font-medium mb-2">Member List</label>
            <select
              id="memberList"
              v-model="form.memberList"
              :disabled="disabledForm"
              multiple
              required
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Yuzeng" :disabled="yuzengDisabled">Yuzeng</option>
              <option value="John" :disabled="johnDisabled">John</option>
              <option value="Jane">Jane</option>
              <option value="Alex">Alex</option>
            </select>
          </div>
        </div>

        <div v-else>
          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-medium mb-2">Date</label>
            <input
              id="date"
              type="datetime-local"
              v-model="form.startDate"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="playerCount" class="block text-gray-700 font-medium mb-2">Player Count</label>
            <input
              id="playerCount"
              type="number"
              v-model="form.playerCount"
              :disabled="disabledForm"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </form>
      <div class="flex flex-row gap-5">
        <button
          type="submit"
          class="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="disableBtn"
          :disabled="disabledForm"
        >
          Submit
        </button>
        <router-link :to="{name: 'teetime-list'}" class="flex-1">
          <button
            @click="resetForm(form.type)"
            class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            Cancel
          </button>
        </router-link>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 class="text-xl font-bold mb-4">Success</h2>
        <p class="text-gray-700 mb-4">Tee Time has been successfully created!</p>
        <router-link :to="{ name: 'teetime-list'}">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back to List
          </button>
        </router-link>
        <button
          @click="closeModal"
          class="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Continue Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, getCurrentInstance } from "vue";
import { useRoleStore } from '@/stores/role';

const { proxy } = getCurrentInstance();
const showModal = ref(false);
const validationMessage = ref('')
const disabledType = ref(false);
const disabledForm = ref(false);
const disableBtn = computed(() => ({
  'bg-gray-400': disabledForm.value,
  'hover:bg-gray-400': disabledForm.value
}));

const roleStore = useRoleStore();
const currentRole = computed(() => roleStore.currentRole);

const form = ref({
  type: "Regular"
});

const isStanding = computed(() => {
  return form.value.type === 'Standing';
})

watch(
  () => form.value.type,
  (newType) => {
    resetForm(newType)
  },
  { immediate: true }
)

const yuzengDisabled = computed(() => {
  return currentRole.value.name === 'Shareholder';
})

const johnDisabled = computed(() => {
  return currentRole.value.name === 'Gold';
})

watch(
  () => currentRole.value.permissions,
  () => {
    if (!currentRole.value.permissions.includes('standing')) {
      form.value.type = 'Regular'
      disabledType.value = true;
    } else {
      disabledType.value = false;
    }

    if (!currentRole.value.permissions.includes('regular')) {
      form.value.type = 'Regular'
      disabledForm.value = true;
    } else {
      disabledForm.value = false;
    }
  },
  {
    immediate: true
  }
)

function closeModal() {
  showModal.value = false;
  resetForm(form.value.type);
}

function resetForm(type) {
  validationMessage.value = '';

  if (type === 'Regular') {
      form.value = {
        type,
        startDate: "",
        playerCount: ""
      }
    } else {
      form.value = {
        type,
        startDate: "",
        endDate: "",
        requestedDay: "Sunday",
        requestedTime: "",
        memberList: []
      }
    }
}

function validateTeeTime(form) {
  const today = new Date();
  const startDate = new Date(form.startDate);
  const endDate = form.endDate ? new Date(form.endDate) : null;
  const playerCount = parseInt(form.playerCount, 10);

  // Validation 1: Start Date must be later than today
  if (startDate <= today) {
    validationMessage.value = "Start Date must be later than today.";
    return false;
  }

  // Validation 2: End Date must be later than Start Date (if End Date is provided)
  if (endDate && endDate <= startDate) {
    validationMessage.value = "End Date must be later than the Start Date.";
    return false;
  }

  // Validation 3: Player Count must be greater than 0
  if (form.type === 'regular' && (isNaN(playerCount) || playerCount <= 0)) {
    validationMessage.value = "Player Count must be greater than 0.";
    return false;
  }

  // If all validations pass
  return true;
}


async function submitForm() {
  validationMessage.value = '';

  if (!validateTeeTime(form.value)) {
    return;
  }

  try {
    const result = await proxy.$axios.post('/teetime', {
      memberId: currentRole.value.memberId,
      ...form.value
    })

    showModal.value = true;

    console.log(result)
  } catch(e) {
    console.error(e)
  }

}
</script>

<style>
/* No additional styles needed as Tailwind handles all styling */
</style>
