<template>
  <form @submit.prevent="searchByCity">
    <label class="absolute right-6 top-8 t3s h-10 rounded-full">
      <input
        placeholder="Country or City"
        v-model="city"
        type="text"
        class="inline-flex text-sm items-center justify-center indent-4 bg-white h-10 w-38 rounded-full text-dark-700"
      />

      <svg
        class="absolute top-2.5 right-2.5 w-5 h-5 text-gray-500 cursor-pointer"
        @click="searchByCity"
      >
        <use href="/icons.svg#search"></use>
      </svg>

      <button type="submit" class="hidden"></button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      city: null,
    };
  },
  methods: {
    searchByCity() {
      if (this.city.length > 2) {
        this.$emit("search", this.city);
      }
    },
  },
};
</script>

<style scoped></style>
