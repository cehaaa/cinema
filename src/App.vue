<template>
  <div class="flex h-screen w-screen select-none bg-gray-900 text-gray-300">
    <div
      class="w-56 overflow-x-hidden pb-3 px-3 flex-none hidden lg:inline-block"
    >
      <Sidebar />
    </div>
    <div class="flex-grow overflow-auto hide-scroll-bar">
      <router-view />
    </div>
    <div
      class="w-60 overflow-x-hidden pb-3 flex-none hide-scroll-bar hidden lg:inline-block"
      v-if="rightSidebar"
    >
      <FriendActivity />
      <FriendSuggestions />
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import FriendActivity from "@/components/FriendActivity.vue";
import FriendSuggestions from "@/components/FriendSuggestions.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "cinema-app",
  components: {
    Sidebar,
    FriendActivity,
    FriendSuggestions,
  },
  setup() {
    const store = useStore();
    const rightSidebar = computed(
      () => store.getters["app-store/rightSidebar"]
    );

    return { rightSidebar };
  },
};
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
