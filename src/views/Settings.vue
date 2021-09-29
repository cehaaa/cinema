<template>
  <div class="rounded-xl pb-8 px-5 bg-indigo-50">
    <div class="pt-8">
      <PremiumBanner />
    </div>

    <div class="flex w-full pt-8">
      <div
        class="w-1/3 mr-10 divide-y divide-solid divide-gray-300 border-r border-gray-300"
      >
        <div class="py-3">
          <router-link
            uter-link
            to="/settings/profile"
            class="text-indigo-500 flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Profile</span>
          </router-link>
        </div>
        <div class="py-3">
          <router-link
            to="/settings/watch-list"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 group"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 group-hover:text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span class="text-gray-500 group-hover:text-indigo-500"
              >Wish List</span
            >
          </router-link>
        </div>
        <div class="py-3">
          <router-link
            to="/settings/friends"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 group-hover:text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="text-gray-500 group-hover:text-indigo-500"
              >Friends</span
            >
          </router-link>
        </div>
        <div class="py-3">
          <router-link
            uter-link
            to="/settings/profile"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 group-hover:text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span class="text-gray-500 group-hover:text-indigo-500"
              >Privacy</span
            >
          </router-link>
        </div>
      </div>
      <div class=" w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, onUnmounted } from "vue";
import PremiumBanner from "@/components/PremiumBanner";

export default {
  name: "Profile",
  components: {
    PremiumBanner,
  },
  setup() {
    const store = useStore();
    store.dispatch("app-store/rightSidebarToogle", false);
    onUnmounted(() => {
      store.dispatch("app-store/rightSidebarToogle", true);
    });
  },
};
</script>

<style></style>
