<template>
  <div class="flex flex-col space-y-5 h-full">
    <div>
      <div class="text-lg font-medium px-3 pt-8">Friends</div>
      <div class="text-sm text-gray-500 px-3 mt-1 ">
        3 Friends on Cinema 🎉
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <div
        class="border p-3 rounded-xl flex items-center justify-between"
        v-for="friend in friendState.friends"
        :key="friend"
      >
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="bg-indigo-500 rounded-full overflow-hidden">
              <img
                :src="'http://localhost:8080/img/' + friend.profile_image"
                alt=""
                class="object-cover object-top w-11 h-11"
              />
            </div>
            <div
              :class="{
                'bg-green-400': friend.online_status,
                'bg-red-500': !friend.online_status,
              }"
              class="w-3 h-3 rounded-full bottom-0 right-0 mt-1 ml-5 absolute"
            ></div>
          </div>
          <div class="font-medium text-lg">{{ friend.name }}</div>
        </div>
        <div>
          <button
            class="p-1 rounded-md hover:bg-indigo-500 group hover:bg-opacity-30 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-indigo-600 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <FriendSuggestions />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import FriendSuggestions from '@/components/FriendSuggestions.vue'

export default {
  name: "friend-activity",
  components : {
    FriendSuggestions
  },
  setup(props, context) {
    const store = useStore();

    const friendState = computed(() => {
      return {
        friends: store.getters.friends,
        friendSuggestions: store.getters.friendSuggestions,
      };
    });

    return {
      friendState,
    };
  },
};
</script>

<style></style>
