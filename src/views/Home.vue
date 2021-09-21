<template>
  <div class="rounded-xl bg-indigo-50 py-8 px-5">
    <SearchMovies />
    <div class=" mt-10">
      <BestMovies />
    </div>
    <div class="mt-10">
      <NowShowing />
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
