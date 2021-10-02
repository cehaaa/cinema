<template>
  <div>
    <div class="text-2xl font-medium">Watch Later</div>

    <div class="grid grid-cols-3 gap-3 mt-4" v-if="watchLater">
      <div
        v-for="item in watchLater"
        :key="item.id"
        class="cursor-pointer border-gray-300 rounded group"
      >
        <div class="overflow-hidden">
          <img
            :src="'http://localhost:3000/storage/banner/' + item.movie_banner"
            class="w-full object-cover"
          />
        </div>
        <div class="p-2">
          <div class="flex justify-between items-center">
            <div
              class="font-bold text-gray-700 text-base group-hover:text-indigo-500"
            >
              {{ item.title }}
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
                <div>No Watch Letter List</div>
                <div>
                  Try adding more movies to your Watch Letter!
                </div>
              </svg>
              <span class="text-sm "> {{ item.rating }} </span>
            </div>
          </div>
          <div class="text-gray-500 text-sm mt-1 tracking-wide">
            {{ item.category }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-4 justify-center items-center" v-else>
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

    console.log(watchLater);

    return {
      watchLater,
    };
  },
};
</script>

<style></style>
