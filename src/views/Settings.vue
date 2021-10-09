<template>
  <div class="bg-gray-800 pt-8 pb-3 px-5 min-h-full">
    <PremiumBanner />

    <div class="flex w-full min-h-full pt-8">
      <div class="w-1/3 flex space-y-4 flex-col">
        <div>
          <router-link
            to="/settings/profile"
            active-class="text-pink-500 active"
            class="flex items-center space-x-5 text-base transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-pink-500"
          >
            Profile
          </router-link>
        </div>
        <div>
          <router-link
            to="/settings/watch-later"
            active-class="text-pink-500"
            class="flex items-center space-x-5 text-base transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-pink-500"
          >
            Watch Later
          </router-link>
        </div>
        <div>
          <router-link
            to="/settings/friends"
            active-class="text-pink-500"
            class="flex items-center space-x-5 text-base transform hover:translate-x-2 duration-200 text-gray-500 font-medium hover:text-pink-500"
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
