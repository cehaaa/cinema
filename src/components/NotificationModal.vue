<template>
  <div
    class="bg-white fixed w-96 p-5 rounded-lg top-40 lg:top-28 right-5 lg:right-64 mr-1 shadow"
    :class="{ hidden: !isShow }"
  >
    <div class="flex justify-between">
      <div>
        <div class="text-lg font-semibold">Notifications 🔔</div>
        <div class="text-gray-500 text-sm mt-1">You have 3 unread message</div>
      </div>
      <div>
        <button
          class="p-1 rounded-md hover:bg-gray-200 hover:bg-opacity-80 group duration-200 group flex items-center justify-center w-full"
          @click="closeNotificationModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500"
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
    </div>

    <div class="divide-y divide-gray-200 divide-solid mt-3 ">
      <div class="py-3">
        <div class="text-md font-medium">New Movie</div>
        <div class="text-gray-500 leading-relaxed">
          New movie now available in cinema, check it out! 🥳
        </div>
      </div>
      <div class="py-3">
        <div class="text-md font-medium">Friend Request</div>
        <div class="text-gray-500 leading-relaxed">
          Accept
          <span class="hover:underline font-medium cursor-pointer text-black"
            >Kazutora</span
          >
          as new friend.
        </div>
      </div>
      <div class="py-3">
        <div class="text-md font-medium">Friend Favorite</div>
        <div class="text-gray-500 leading-relaxed">
          <span class="hover:underline font-medium cursor-pointer text-black"
            >Mikey</span
          >
          started 2 movies.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification-modal",
  props: {
    isShow: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const closeNotificationModal = () => {
      context.emit("closeNotificationModal");
    };

    return {
      closeNotificationModal,
    };
  },
};
</script>

<style></style>
