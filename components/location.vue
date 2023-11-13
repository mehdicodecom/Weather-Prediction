<template>
  <div class="relative text-center py-2 flex flex-col items-start">
    <h2 class="text-2xl font-bold bg-dark-800/30 inline-block px-2">
      {{ location.name }}
    </h2>
    <h3 class="text-xl font-medium bg-dark-800/30 inline-block px-2 mt-1">
      {{ location.country }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
