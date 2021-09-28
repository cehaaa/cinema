<template>
  <div class="rounded-xl pb-8 px-5 bg-indigo-50">
    <div class="pt-8">
      <PremiumBanner />
    </div>

    <div class="flex w-full pt-8">
      <div class="w-1/3 pr-10 flex flex-col space-y-3">
        <router-link
          to="/settings/profile"
          class="px-5 py-3 bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 duration-200 cursor-pointer font-medium text-lg"
        >
          Profile
        </router-link>
        <router-link
          to="/settings/watch-list"
          class="px-5 py-3 rounded-lg text-dark hover:text-white hover:bg-indigo-500 duration-200 cursor-pointer font-medium text-lg"
        >
          Watch List
        </router-link>
        <router-link
          to="/settings/friends"
          class="px-5 py-3 rounded-lg text-dark hover:text-white hover:bg-indigo-500 duration-200 cursor-pointer font-medium text-lg"
        >
          Friends
        </router-link>
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
