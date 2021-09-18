<template>
  <div class="bg-white rounded-2xl p-5">
    <div class="flex items-center justify-between">
      <!-- heading -->
      <div>
        <div class="text-2xl font-semibold">Best Movies 🎬</div>
        <div class="text-gray-500 tracking-wide mt-2">
          100+ Movies found.
        </div>
      </div>

      <!-- filters -->
      <div
        class="flex space-x-2 border border-indigo-500 rounded-lg p-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <span class=" text-indigo-500">Filters</span>
      </div>
    </div>

    <!-- movies list -->
    <div class="mt-6">
      <div class="divide-y divide-gray-200 divide-solid ">
        <div
          class="flex justify-between items-center py-3"
          v-for="movie in movies"
          :key="movie.id"
        >
          <div class="flex space-x-5 items-center ">
            <div class="">
              <img
                :src="
                  'http://localhost:3000/storage/banner/' + movie.movie_banner
                "
                alt=""
                class="object-cover object-top h-28 w-28 rounded-xl cursor-pointer"
              />
            </div>
            <div>
              <div class="font-bold text-gray-700 text-lg">
                {{ movie.title }}
              </div>
              <div class="flex items-center mt-3 space-x-4">
                <div class="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span
                    class="text-sm text-gray-500 font-medium tracking-wide"
                    >{{ movie.duration }}</span
                  >
                </div>
                <div class="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span class="text-sm text-gray-500 font-medium tracking-wide">
                    {{ movie.total_watch }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 duration-200 text-white rounded-xl px-3 py-2 w-28 h-12 flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="font-medium">Watch</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <a
        href=""
        class="text-indigo-500 font-medium hover:text-indigo-600 duration-200 text-base"
        >Find more</a
      >
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "best-movies",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("movies-store/fetchBestMovies");
    });

    const movies = computed(() => store.getters["movies-store/bestMovies"]);

    return { movies };
  },
};
</script>

<style></style>
