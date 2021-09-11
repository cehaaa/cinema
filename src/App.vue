<template>
  <div class="flex h-screen w-screen">
    <div class="w-2/12 border-r border-gray-500 overflow-x-hidden">
      <Sidebar />
    </div>
    <div class="flex-grow overflow-auto hide-scroll-bar">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "@/components/Sidebar.vue";

@Options({
  components: {
    Sidebar,
  },
})
export default class App extends Vue {}
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
