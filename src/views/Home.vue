<template>
  <div class="rounded-xl border-black bg-indigo-50 py-8 px-5 h-full">
    <SearchMovies />
    <div class=" mt-10">
      <BestMovies />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchMovies from "@/components/SearchMovies.vue";
import BestMovies from "@/components/BestMovies.vue";

export default {
  name: "home",
  components: {
    SearchMovies,
    BestMovies,
  },
  setup() {
    const username = ref("Jeremy");

    return { username };
  },
};
</script>

<style></style>
