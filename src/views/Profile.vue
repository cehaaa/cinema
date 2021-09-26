<template>
  <div>
    Profile page
  </div>
</template>

<script>
import { useStore } from "vuex";

import { onMounted, onUnmounted } from "vue";

export default {
  name: "Profile",
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
