<template>
  <div class="bg-white rounded-2xl p-5">
    <div class="flex items-center justify-between">
      <!-- heading -->
      <div>
        <div class="text-2xl font-semibold">Now Showing 🍿</div>
      </div>
      <div>
        <a
          href=""
          class="text-indigo-500 font-medium hover:text-indigo-600 text-base"
          >Find more</a
        >
      </div>
    </div>
    <div class="mt-6">
      <div class="grid grid-cols-4 gap-3">
        <div
          class="group cursor-pointer"
          v-for="(movie, index) in movies"
          :key="movie[index]"
        >
          <div class="overflow-hidden rounded-lg relative">
            <img
              :src="
                'http://localhost:3000/storage/banner/' + movie.movie_banner
              "
              class="w-full object-cover object-center h-80"
            />
            <div
              class="absolute p-3 bottom-0 right-0 invisible group-hover:visible flex space-x-2"
            >
              <button
                class="rounded-full h-10 w-10 p-1 bg-indigo-500 flex items-center justify-center hover:bg-indigo-600 duration-200"
                @click="addToWatchLater(movie)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
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
              <button
                class="rounded-full h-10 w-10 p-1 bg-indigo-500 flex items-center justify-center hover:bg-indigo-600 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
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
              </button>
            </div>
          </div>
          <div class="p-2">
            <div class="flex justify-between items-center">
              <div
                class="font-bold text-gray-700 text-base group-hover:text-indigo-500"
              >
                {{ movie.title }}
              </div>
              <div class="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-sm"> {{ movie.rating }} </span>
              </div>
            </div>
            <div class="text-gray-500 text-sm mt-1 tracking-wide">
              {{ movie.category }}
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
import Alert from "@/components/Alert";

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
