<template>
  <div>
    <div class="text-2xl font-medium">Watch Later</div>

    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
      v-if="watchLater.length > 0"
    >
      <div v-for="movie in watchLater" :key="movie.id">
        <div class="relative overflow-hidden rounded-md group">
          <img
            :src="'http://localhost:3000/storage/banner/' + movie.movie_banner"
            class="object-cover object-center w-full rounded-md"
          />
          <div
            class="absolute top-0 group-hover:right-0 -right-12 m-3 duration-200 opacity-0 group-hover:opacity-100"
          >
            <button
              class="bg-gray-700 hover:bg-gray-600 hover:bg-opacity-80 duration-200 rounded-full p-1 bg-opacity-80"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="absolute p-3 font-bold bg-gradient-to-t from-black w-full bottom-0 text-lg"
          >
            {{ movie.title }}
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
            class="p-3 inline-block mt-9 text-white font-medium rounded-lg bg-pink-600 hover:bg-pink-500 duration-200"
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
