<template>
  <div class="flex flex-col space-y-2 pb-3 pt-3">
    <div class="px-3">
      <div class="font-medium text-lg">People you may know</div>
      <div class="text-sm text-gray-500 mt-1">
        Find a new friend here
      </div>
    </div>

    <div class="flex flex-col">
      <div v-for="friend in suggestedFriends" :key="friend">
        <div
          class="px-2 py-3 duration-200 flex w-full justify-between items-center group hover:bg-gray-700"
        >
          <div class="flex items-center space-x-2">
            <div class="rounded-full relative">
              <img
                :src="
                  'http://localhost:3000/storage/profile/' +
                    friend.profile_image
                "
                class="object-cover object-top w-10 h-10 rounded-full"
              />
              <div
                class="absolute w-3 h-3 rounded-full bottom-0 right-0"
                :class="{
                  'bg-green-400': friend.online_status,
                  'bg-red-500': !friend.online_status,
                }"
              ></div>
            </div>
            <div>{{ friend.name }}</div>
          </div>
          <div>
            <button
              class="p-2 rounded-md group-hover:bg-pink-600 duration-200 border border-pink-600 text-sm"
              @click="openAlert"
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Alert
      :isAlerted="isAlerted"
      status="primary"
      message="Invitation sent 💌"
      @closeAlert="closeAlert"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Alert from "@/components/Alert.vue";

export default {
  name: "friend-suggestions",
  components: {
    Alert,
  },
  setup(props, context) {
    // ANCHOR : Variable
    const store = useStore();
    const isAlerted = ref(false);

    onMounted(() => {
      store.dispatch("users-store/fetchSuggestedFriends");
    });

    const suggestedFriends = computed(
      () => store.getters["users-store/suggestedFriends"]
    );

    // ANCHOR: Method
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

    return {
      suggestedFriends,
      isAlerted,

      openAlert,
      closeAlert,
    };
  },
};
</script>
