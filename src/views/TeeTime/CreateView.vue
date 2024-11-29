<template>
  <div class="container mx-auto bg-blue-50 flex flex-column">
    <div class="bg-white p-8 shadow-lg rounded-lg w-full flex-1">
      <h1 class="text-2xl font-bold mb-2">Book Tee Time</h1>
      <p class="text-gray-600 mb-6">Book Standing or Regular Tee Time</p>

      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Type Dropdown -->
        <div class="mb-4">
          <label for="type" class="block text-gray-700 font-medium mb-2">Type</label>
          <select
            id="type"
            v-model="form.type"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select an option</option>
            <option value="regular">Regular</option>
            <option value="standing">Standing</option>
          </select>
        </div>

        <!-- Date Picker -->
        <div class="mb-4">
          <label for="date" class="block text-gray-700 font-medium mb-2">Date</label>
          <input
            id="date"
            type="date"
            v-model="form.date"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Player Count -->
        <div class="mb-4">
          <label for="playerCount" class="block text-gray-700 font-medium mb-2">Player Count</label>
          <input
            id="playerCount"
            type="number"
            v-model="form.playerCount"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  type: "",
  date: "",
  playerCount: 0,
});

function submitForm() {
  console.log("Form Submitted:", form);
  alert(`Tee Time Booked! Type: ${form.type}, Date: ${form.date}, Players: ${form.playerCount}`);
}
</script>

<style>
/* No additional styles needed as Tailwind handles all styling */
</style>
