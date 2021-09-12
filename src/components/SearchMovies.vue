<template>
  <div class="flex items-center justify-between">
    <div>
      <div class="text-3xl font-bold">Hello, {{ username }}! 👋</div>
      <div class="text-gray-500 mt-2 tracking-wide">
        Welcome back and explore the movie.
      </div>
    </div>
    <div class="flex items-center space-x-7">
      <input
        type="text"
        class="rounded-full px-5 w-64 py-3 outline-none focus:ring-4 ring-indigo-500 ring-opacity-20 duration-200"
        placeholder="Search Movies..."
      />
      <div
        class="rounded-full bg-white p-3 flex items-center justify group cursor-pointer relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:text-indigo-500 duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div
          class="absolute w-4 h-4 rounded-full bg-red-500 text-white top-0 right-0 mt-2 mr-3 flex items-center justify-center text-xs"
        >
          <div class="">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "search",
  setup() {
    const username = ref("Jeremy");
    return {
      username,
    };
  },
};
</script>

<style></style>
