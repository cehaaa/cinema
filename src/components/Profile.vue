<template>
  <div class="w-36 relative">
    <div class="absolute right-0 bottom-0 mr-2 mb-2">
      <button
        class="bg-gray-700 hover:bg-gray-600 duration-200 cursor-pointer rounded-full w-full h-full flex items-center justify-center p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
    <img
      src="@/assets/img/2.jpg"
      class="w-32 h-32 rounded-full object-cover object-center"
    />
  </div>
  <div class="flex flex-col space-y-5 mt-8">
    <div>
      <div class="text-gray-600  font-medium">
        Name <span class="text-red-500">*</span>
      </div>
      <input
        type="text"
        class="w-full outline-none p-3 rounded-lg mt-1 bg-gray-600 hover:bg-white duration-200 hover:ring-4 hover:text-gray-800 font-medium ring-pink-300"
        value="Myoui Mina"
      />
    </div>
    <div>
      <div class="text-gray-600  font-medium">
        Location
      </div>
      <input
        type="text"
        class="w-full outline-none p-3 rounded-lg mt-1 bg-gray-600 hover:bg-white duration-200 hover:ring-4 hover:text-gray-800 font-medium ring-pink-300"
        value="Jakarta, Indonesia"
      />
    </div>
    <div>
      <div class="text-gray-600  font-medium">
        Bio
      </div>
      <textarea
        rows="5"
        type="text"
        class="w-full outline-none p-3 rounded-lg mt-1 bg-gray-600 hover:bg-white duration-200 hover:ring-4 hover:text-gray-800 font-medium ring-pink-300 resize-none"
        value="Bio goes here..."
      />
    </div>
    <div class="flex space-x-3">
      <button
        class="p-3 w-36 text-white font-medium rounded-lg bg-pink-600 hover:bg-pink-500 duration-200"
      >
        Save
      </button>
      <button
        class="p-3 w-36 text-white font-medium rounded-lg bg-gray-600 hover:bg-gray-400 duration-200"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style></style>
