<template>
  <div>
    <p class="relative">
      <span class="text-5xl font-bold">{{ today.avgtemp_c }}</span>
      <sup class="absolute top-0 text-5xl">°</sup>
      <span class="text-xl ml-1">avg</span>
    </p>
    <h3 class="font-bold">{{ today.condition.text }}</h3>
  </div>

  <div class="mt-8 flex gap-10">
    <p class="relative">
      <span class="text-3xl font-bold">{{ today.maxtemp_c }}</span>
      <sup class="absolute top-0 text-3xl">°</sup>
      <span class="text-sm ml-1">Max temp</span>
    </p>

    <p class="relative">
      <span class="text-3xl font-bold">{{ today.mintemp_c }}</span>
      <sup class="absolute top-0 text-3xl">°</sup>
      <span class="text-sm ml-1">Min temp</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    today: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
