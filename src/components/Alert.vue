<template>
  <div>
    <div
      class="fixed top-0 mr-3 mt-3 w-72 px-3 py-4 rounded-md text-white duration-200 border-l-8 "
      :class="{
        'bg-red-400': status === 'danger',
        'bg-indigo-400': status === 'primary',
        'bg-green-400': status === 'success',

        'border-red-500': status === 'danger',
        'border-indigo-500': status === 'primary',
        'border-green-500': status === 'success',

        'animate-fadeLeft, right-0': isAlerted,
        '-right-80': !isAlerted,
      }"
    >
      <div class="flex justify-between items-center">
        <div class="font-medium text-lg">{{ message }}</div>
        <button
          class="p-1 rounded-md hover:bg-white group hover:bg-opacity-30 duration-200"
          @click="closeAlert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
  </div>
</template>

<script lang="ts">
export default {
  name: "alert",
  props: {
    isAlerted: {
      type: Boolean,
    },
    status: {
      type: String,
    },
    message: {
      type: String,
    },
  },

  setup(props: any, context: any) {
    const closeAlert = () => {
      context.emit("closeAlert");
    };

    return {
      closeAlert,
    };
  },
};
</script>
