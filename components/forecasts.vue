<template>
  <button
    @click="showForecasts = true"
    :class="[
      'absolute transition ease-in-out duration-300 bottom-5 left-0 right-0 bg-green-500/85 text-white flex h-12 w-11/12 mx-auto items-center justify-center rounded-lg',
      { 'opacity-0': showForecasts },
    ]"
  >
    Show weather forecast
  </button>
  <div
    :class="[
      'relative z-10 transition ease-in-out duration-1200	bg-white rounded-t-2xl h-94 overflow-auto py-6 mt-auto',
      showForecasts ? 'translate-y-0' : 'translate-y-full',
    ]"
  >
    <div>
      <div
        @click="showForecasts = false"
        class="absolute top-2.5 right-4 flex items-center gap-2 cursor-pointer"
      >
        <svg class="w-6 h-6 text-red-500">
          <use href="icons.svg#close"></use>
        </svg>
        <p class="text-sm text-red-500">Hide</p>
      </div>

      <p class="font-bold text-xl px-10 pb-1 border-b border-dark-50">
        Next {{ forecasts.length - 1 }} Days
      </p>

      <div>
        <div
          class="flex items-center py-2 border-b border-stone-400 text-sm"
          v-for="forcast in futureForecasts"
        >
          <img :src="forcast.day.condition.icon" alt="" class="w-12 ml-8" />

          <p class="ml-6">{{ forcast.day.condition.text }}</p>

          <p class="flex flex-col items-end ml-auto mr-6">
            <span>{{ getDayInfo(forcast.date_epoch) }}</span>
            <span class="text-base font-bold">{{
              getDayInfo(forcast.date_epoch, "num")
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forecasts: {
      type: Object,
    },
  },
  data() {
    return {
      showForecasts: true,
    };
  },
  computed: {
    futureForecasts() {
      let forecasts = [...this.forecasts];
      forecasts.splice(0, 1);
      return forecasts;
    },
  },
  methods: {
    getDayInfo(dateEpoch, type = "name") {
      const date = new Date(dateEpoch * 1000);
      if (type === "name") {
        // Get day name
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = dayNames[date.getDay()].toUpperCase();
        return dayName;
      } else {
        // Get day number
        const dayNumber = date.getDate();
        return dayNumber;
      }
    },
  },
};
</script>

<style scoped></style>
