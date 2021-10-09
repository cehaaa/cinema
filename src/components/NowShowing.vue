<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="text-2xl font-semibold">Popular Movies</div>
      <div
        class="text-gray-500 mt-2 cursor-pointer font-medium hover:text-pink-600 duration-200"
      >
        See All
      </div>
    </div>
    <div class="mt-6">
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div
          class="overflow-hidden group cursor-pointer"
          v-for="(movie, index) in movies"
          :key="movie[index]"
        >
          <div class="relative overflow-hidden rounded-md">
            <img
              :src="
                'http://localhost:3000/storage/banner/' + movie.movie_banner
              "
              class="object-cover object-center w-full rounded-md"
            />
            <div
              class="absolute w-full p-2 bg-gradient-to-t from-black text-base -bottom-12 group-hover:bottom-0 duration-200 flex justify-between items-center"
            >
              <div class="font-medium">{{ movie.title }}</div>
              <div>
                <button
                  class="bg-pink-600 p-1 rounded hover:bg-pink-700"
                  @click="addToWatchLater(movie)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-xs items-center justify-between">
            <div class="text-gray-500 tracking-wide ">
              {{ movie.category }}
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <div>{{ movie.rating }}</div>
              </div>
              <div class="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
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
                <div>{{ movie.total_watch }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alert
      :isAlerted="isAlerted"
      status="success"
      :message="'Added to watch letter 😎'"
      @closeAlert="closeAlert"
    />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Alert from "@/components/Alert.vue";

export default {
  name: "now-showing",
  components: {
    Alert,
  },
  setup() {
    const store = useStore();
    const isAlerted = ref(false);

    onMounted(() => {
      store.dispatch("movies-store/fetchOnShowingMovies");
    });

    const movies = computed(
      () => store.getters["movies-store/onShowingMovies"]
    );

    const addToWatchLater = (data: any) => {
      openAlert();
      store.dispatch("watch-later-store/addToWatchLater", data);
    };

    const openAlert = () => {
      isAlerted.value = true;
      autoCloseAlert();
    };

    const closeAlert = () => {
      isAlerted.value = false;
    };

    const autoCloseAlert = () => {
      setTimeout(() => {
        closeAlert();
      }, 2500);
    };

    return { movies, isAlerted, openAlert, closeAlert, addToWatchLater };
  },
};
</script>

<style></style>
