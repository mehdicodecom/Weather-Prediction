<template>
  <div
    class="absolute bottom-24 left-0 right-0 mx-auto bg-stone-700/50 py-6 px-4 w-11/12 mx-auto rounded-xl text-white grid grid-rows-3 grid-cols-2 gap-y-7 gap-x-4"
  >
    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#rain"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">30%</span>
        <p class="text-sm">Raining chance</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#snow"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">5%</span>
        <p class="text-sm">Snowfall chance</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#humidity"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">65%</span>
        <p class="text-sm">Humidity</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#wind"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">20.5 km/h</span>
        <p class="text-sm">Wind Speed</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#uv"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">7</span>
        <p class="text-sm">Ultraviolet index</p>
      </div>
    </div>

    <div class="flex gap-2">
      <svg class="relative w-8 h-8">
        <use href="icons.svg#eye"></use>
      </svg>

      <div class="flex flex-col">
        <span class="text-xl">15 km</span>
        <p class="text-sm">Visibility</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
