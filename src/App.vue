<template>
  <div class="flex h-screen w-screen">
    <div class="w-2/12 border-r-2">
      <Sidebar />
    </div>
    <div class="flex-grow">
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
