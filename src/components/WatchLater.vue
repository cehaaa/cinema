<template>
  <div>
    <div class="text-2xl font-medium">Watch Later</div>

    <div class="grid grid-cols-3 gap-5 mt-4" v-if="watchLater.length > 0">
      <div v-for="movie in watchLater" :key="movie">
        <div class="cursor-pointer relative">
          <img
            :src="'http://localhost:3000/storage/banner/' + movie.movie_banner"
            class="w-full object-cover objece-center"
          />
          <button
            class="p-2 rounded-md bg-indigo-500 group bg-opacity-80 duration-200 absolute top-0 right-0 m-3"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <div
            class="absolute bottom-0 p-3 w-full text-white bg-gradient-to-t from-gray-800 flex justify-between items-center"
          >
            <div class="font-bold text-lg">{{ movie.title }}</div>
            <div class="flex space-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="font-medium"> {{ movie.rating }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex mt-4 justify-center items-center">
      <div class="text-center flex items flex-col items-center space-y-2">
        <img src="@/assets/img/empty_history.png" alt="" />
        <div>
          <div class="text-2xl font-semibold">No Watch Letter List</div>
          <div class="text-gray-500 mt-1">
            Try adding more movies to your Watch Letter!
          </div>
          <router-link
            to="/"
            class="p-3 inline-block mt-9 text-white font-medium rounded-lg bg-indigo-500 hover:bg-indigo-600 duration-200"
          >
            Watch Movies Now!
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "watch-later",
  setup() {
    const store = useStore();

    const watchLater = computed(
      () => store.getters["watch-later-store/watchLater"]
    );

    return {
      watchLater,
    };
  },
};
</script>

<style></style>
