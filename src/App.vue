<template>
  <div class="flex h-screen w-screen select-none">
    <div class="w-56 overflow-x-hidden py-3 px-3 flex-none">
      <Sidebar />
    </div>
    <div class="flex-grow overflow-auto hide-scroll-bar py-3">
      <router-view />
    </div>
    <div class="w-60 overflow-x-hidden py-3 px-3 flex-none">
      <FriendActivity />
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import FriendActivity from "@/components/FriendActivity.vue";

export default {
  name: "cinema-app",
  components: {
    Sidebar,
    FriendActivity,
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
