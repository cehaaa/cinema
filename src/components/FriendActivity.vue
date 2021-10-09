<template>
  <div class="flex flex-col space-y-2 pt-8 pb-3">
    <div class="px-3">
      <div class="text-lg font-medium">Friends</div>
      <div class="text-sm text-gray-500 ">
        {{ friends.length }} Friends on Cinema
      </div>
    </div>
    <div class="flex flex-col">
      <div v-for="friend in friends" :key="friend">
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
              class="py-1 px-3 rounded group-hover:bg-pink-600 duration-200 border border-pink-600 text-sm"
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "friend-activity",
  setup(props, context) {
    const store = useStore();

    onMounted(() => {
      store.dispatch("users-store/fetchFriends");
    });

    const friends = computed(() => store.getters["users-store/friends"]);

    return {
      friends,
    };
  },
};
</script>

<style></style>
