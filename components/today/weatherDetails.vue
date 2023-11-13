<template>
  <div
    class="absolute bottom-24 left-0 right-0 mx-auto bg-stone-700/50 py-6 px-4 w-11/12 mx-auto rounded-xl text-white grid grid-rows-3 grid-cols-2 gap-y-7 md:gap-x-4 xs:gap-x-2"
  >
    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#rain"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.daily_chance_of_rain }}%</span>
        <p class="text-sm">Raining chance</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#snow"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.daily_chance_of_snow }}%</span>
        <p class="text-sm">Snowfall chance</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#humidity"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.avghumidity }}%</span>
        <p class="text-sm">Humidity</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#wind"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.maxwind_kph }} km/h</span>
        <p class="text-sm">Wind Speed</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#uv"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.uv }}</span>
        <p class="text-sm">Ultraviolet index</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#eye"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">{{ today.avgvis_km }} km</span>
        <p class="text-sm">Visibility</p>
      </div>
    </div>
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
