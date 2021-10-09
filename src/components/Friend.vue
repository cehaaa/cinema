<template>
  <div>
    <div class="text-2xl font-medium">Friends</div>
    <div class="grid grid-cols-3 gap-3 mt-4">
      <div
        v-for="friend in friends"
        :key="friend"
        class="group cursor-pointer border border-gray-600 rounded overflow-hidden"
      >
        <div class="overflow-hidden">
          <img
            :src="
              'http://localhost:3000/storage/profile/' + friend.profile_image
            "
            class="transform hover:scale-110 duration-200"
          />
        </div>
        <div class="p-3">
          <div class="text-lg font-medium">{{ friend.name }}</div>
          <button
            class="bg-pink-600 w-full text-white rounded-lg mt-3 py-3 hover:bg-pink-500 font-medium duration-200 text-lg"
          >
            Profile
          </button>
          <button
            class="bg-gray-600 w-full text-white rounded-lg mt-3 py-3 hover:bg-gray-500 font-medium duration-200 text-lg"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <div class="text-2xl font-medium mt-8">People you might know</div>
    <div class="grid grid-cols-3 gap-3 mt-4">
      <div
        v-for="friend in suggestedFriends"
        :key="friend"
        class="group cursor-pointer rounded overflow-hidden border border-gray-600"
      >
        <div class="overflow-hidden">
          <img
            :src="
              'http://localhost:3000/storage/profile/' + friend.profile_image
            "
            class="transform hover:scale-110 duration-200"
          />
        </div>
        <div class="p-3">
          <div class="text-lg font-medium">{{ friend.name }}</div>
          <button
            class="bg-pink-600 w-full text-white rounded-lg mt-3 py-3 hover:bg-pink-500 font-medium duration-200 text-lg"
          >
            Add Friend
          </button>
          <button
            class="bg-gray-600 w-full text-white rounded-lg mt-3 py-3 hover:bg-gray-500 font-medium duration-200 text-lg"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

export default {
  name: "friend",
  setup(props, context) {
    const store = useStore();

    onMounted(() => {
      store.dispatch("users-store/fetchFriends");
      store.dispatch("users-store/fetchSuggestedFriends");
    });

    const friends = computed(() => store.getters["users-store/friends"]);
    const suggestedFriends = computed(
      () => store.getters["users-store/suggestedFriends"]
    );

    return { friends, suggestedFriends };
  },
};
</script>

<style></style>
