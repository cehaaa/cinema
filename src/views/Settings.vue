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
            to="/settings/profile"
            active-class="text-indigo-500 active"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-indigo-500"
          >
            Profile
          </router-link>
        </div>
        <div class="py-3">
          <router-link
            to="/settings/watch-later"
            active-class="text-indigo-500"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-indigo-500"
          >
            Watch Later
          </router-link>
        </div>
        <div class="py-3">
          <router-link
            to="/settings/friends"
            active-class="text-indigo-500"
            class="flex items-center space-x-5 text-lg transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-indigo-500"
          >
            Friends
          </router-link>
        </div>
      </div>
      <div class="w-full">
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
