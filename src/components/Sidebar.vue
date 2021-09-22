<template>
  <div class="flex flex-col space-y-5 h-full">
    <div
      class="text-3xl font-semibold cursor-pointer px-3 pt-8 pb-3 duration-200 transform hover:translate-x-1 text-warning"
    >
      Cinema
    </div>
    <div class="flex flex-col flex-grow space-y-3">
      <router-link
        to="/"
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
        :class="{ 'bg-indigo-500 , text-white': checkRouteName() === 'Home' }"
      >
        Home
      </router-link>
      <div
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
      >
        For You
      </div>
      <div
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
      >
        Drama
      </div>
      <div
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
      >
        Popular Now
      </div>
      <div
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
      >
        Coming Soon
      </div>
    </div>
    <div>
      <div
        class="p-3 cursor-pointer bg-gray-200 hover:bg-red-600 hover:text-white font-medium rounded-md duration-200  flex space-x-3 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { checkRouteName } from "@/utils/utils";

export default {
  name: "Sidebar",
  setup() {
    return { checkRouteName };
  },
};
</script>
