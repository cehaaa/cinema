<template>
  <div class="bg-gray-800 py-11 px-5">
    <!-- <SearchMovies /> -->
    <div class="text-3xl font-semibold">Discovers</div>
    <div class="mt-7">
      <BestMovies />
    </div>
    <div class="mt-10">
      <!-- <NowShowing /> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchMovies from "@/components/SearchMovies.vue";
import BestMovies from "@/components/BestMovies.vue";
import NowShowing from "@/components/NowShowing.vue";

export default {
  name: "home",
  components: {
    SearchMovies,
    BestMovies,
    NowShowing,
  },
  setup() {
    const username = ref("Jeremy");

    return { username };
  },
};
</script>

<style></style>
