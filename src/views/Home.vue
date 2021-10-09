<template>
  <div class="bg-gray-800 pt-8 pb-3 px-5 min-h-full">
    <!-- <SearchMovies /> -->
    <div class="text-3xl font-semibold">Discovers</div>
    <div class="mt-7">
      <PopularMovies />
    </div>
    <div class="mt-7">
      <NowShowing />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchMovies from "@/components/SearchMovies.vue";
import PopularMovies from "@/components/PopularMovies.vue";
import NowShowing from "@/components/NowShowing.vue";

export default {
  name: "home",
  components: {
    SearchMovies,
    PopularMovies,
    NowShowing,
  },
  setup() {
    const username = ref("Jeremy");

    return { username };
  },
};
</script>

<style></style>
