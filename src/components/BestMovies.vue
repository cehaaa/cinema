<template>
  <div class="">
    <div class="flex items-center justify-between">
      <!-- heading -->
      <div class="flex items-center justify-between w-full">
        <div class="text-2xl font-semibold">Popular Movies</div>
        <div
          class="text-gray-500 mt-2 cursor-pointer font-medium hover:text-pink-600 duration-200"
        >
          See All
        </div>
      </div>
    </div>

    <!-- movies list -->
    <div class="mt-6">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="movie in movies"
          :key="movie"
          class="overflow-hidden group cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-md">
            <img
              :src="
                'http://localhost:3000/storage/banner/' + movie.movie_banner
              "
              class="object-cover object-center w-full rounded-md group-hover:scale-110 duration-200 transform"
            />
            <div class="absolute left-0 top-0 p-2">
              <div
                class="bg-gray-700 bg-opacity-80 rounded-md px-2 py-1 text-xs w-14 flex font-medium items-center justify-between"
              >
                <div>{{ movie.total_watch }}</div>
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
              </div>
            </div>
          </div>
          <div class="mt-2">
            <div class="font-medium">{{ movie.title }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ movie.category }}</div>
          </div>
        </div>
      </div>
    </div>

    <Alert
      :isAlerted="isAlerted"
      :status="status"
      message="Network Error 👽"
      @closeAlert="closeAlert"
    />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Alert from "@/components/Alert.vue";

export default {
  name: "best-movies",
  components: {
    Alert,
  },
  setup() {
    const store = useStore();

    const isAlerted = ref(false);
    const status = ref("danger");

    onMounted(() => {
      store.dispatch("movies-store/fetchBestMovies");
    });

    const movies = computed(() => store.getters["movies-store/bestMovies"]);

    const closeAlert = () => {
      isAlerted.value = false;
    };

    const autoCloseAlert = () => {
      setTimeout(() => {
        closeAlert();
      }, 2500);
    };

    autoCloseAlert();

    return { movies, status, isAlerted, closeAlert };
  },
};
</script>

<style></style>
