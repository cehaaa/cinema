<template>
  <div class="rounded-xl border-black bg-indigo-50 py-8 px-5 h-full">
    <SearchMovies />
    <div class=" mt-10 grid grid-cols-6 gap-x-5">
      <BestMovies />
      <div class="bg-white p-5 col-span-2 rounded-2xl max-h-full">
        <div>nanana</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime
          perspiciatis blanditiis ipsa enim et neque libero fuga error,
          reiciendis vel consequatur quasi nam officiis placeat quos architecto,
          iusto ex.
        </div>
      </div>
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
