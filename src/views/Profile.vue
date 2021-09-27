<template>
  <div class="rounded-xl py-8 px-5 bg-indigo-50 h-full">
    <PremiumBanner />
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
