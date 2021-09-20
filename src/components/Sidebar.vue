<template>
  <div class="flex flex-col space-y-5 h-full">
    <div
      class="text-3xl font-semibold cursor-pointer px-3 pt-8 pb-3 duration-200 transform hover:translate-x-1 text-warning"
    >
      Cinema
    </div>
    <div class="flex flex-col space-y-3">
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
        Popular Now
      </div>
      <div
        class="p-3 cursor-pointer hover:bg-indigo-500 hover:text-white font-medium rounded-md duration-200 text-lg"
      >
        Coming Soon
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
