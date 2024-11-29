<template>
  <div class="overflow-x-auto w-full">
    <router-link :to="{name: 'teetime-create'}">
      <button class="bg-blue-500 text-white mb-2 px-2 py-1 float-right rounded hover:bg-blue-600">Create</button>
    </router-link>
    <table class="table-auto w-full border-collapse border border-gray-200">
      <!-- Table Header -->
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 text-left border border-gray-300">#</th>
          <th class="px-4 py-2 text-left border border-gray-300">Name</th>
          <th class="px-4 py-2 text-left border border-gray-300">Email</th>
          <th class="px-4 py-2 text-left border border-gray-300">Role</th>
          <th class="px-4 py-2 text-left border border-gray-300">Actions</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <tr class="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">1</td>
          <td class="px-4 py-2 border border-gray-300">John Doe</td>
          <td class="px-4 py-2 border border-gray-300">john@example.com</td>
          <td class="px-4 py-2 border border-gray-300">Admin</td>
          <td class="px-4 py-2 border border-gray-300">
            <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
          </td>
        </tr>
        <tr class="hover:bg-gray-100 odd:bg-white even:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">2</td>
          <td class="px-4 py-2 border border-gray-300">Jane Smith</td>
          <td class="px-4 py-2 border border-gray-300">jane@example.com</td>
          <td class="px-4 py-2 border border-gray-300">Editor</td>
          <td class="px-4 py-2 border border-gray-300">
            <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// No specific JavaScript is required for this static table example.
</script>

<style scoped>
/* No additional styles required; Tailwind handles styling */
</style>


<style>
</style>
