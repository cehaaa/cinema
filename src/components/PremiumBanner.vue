<template>
  <div
    class="bg-indigo-500  bg-opacity-70 px-3 py-4 rounded border-l-8 border-indigo-500 flex justify-between items-center"
  >
    <div>
      <div class="text-lg font-medium text-white">Become a member</div>
      <div class="text-sm text-gray-200 mt-1">
        Activate VIP membership to enjoy exclusive privileges.
      </div>
    </div>
    <div>
      <button
        class="p-1 rounded-md hover:bg-white group hover:bg-opacity-30 duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "premium-banner",
};
</script>

<style></style>
