<template>
  <button
    class="absolute bottom-5 left-0 right-0 bg-green-500/85 text-white flex h-12 w-11/12 mx-auto items-center justify-center rounded-lg"
  >
    Show weather forecast
  </button>
  <div
    class="relative z-10 bg-white rounded-t-2xl h-96 overflow-hidden py-6 translate-y-full mt-auto"
  >
    <div>
      <p class="font-bold text-xl px-10 pb-1 border-b border-dark-50">
        Next 9 Days
      </p>

      <div>
        <div
          class="flex items-center py-2 border-b border-stone-400 text-sm"
          v-for="forcast in forcasts"
        >
          <img
            :src="`weather/day/${forcast.icon}.png`"
            alt=""
            class="w-12 ml-8"
          />

          <p class="ml-6">{{ forcast.status }}</p>

          <p class="flex flex-col items-end ml-auto mr-6">
            <span>{{ forcast.day.name }}</span>
            <span class="text-base font-bold">{{ forcast.day.num }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forcasts: [
        {
          day: {
            name: "FRI",
            num: "07",
          },
          icon: "113",
          avgtemp_c: "25",
          status: "A FULL DAY SUNSHINE",
        },
        {
          day: {
            name: "SAT",
            num: "08",
          },
          icon: "308",
          temp: "8",
          status: "HEAVY RAIN",
        },
        {
          day: {
            name: "SUN",
            num: "09",
          },
          icon: "116",
          temp: "18",
          status: "CLOUDY",
        },
        {
          day: {
            name: "MON",
            num: "10",
          },
          icon: "113",
          temp: "25",
          status: "A FULL DAY SUNSHINE",
        },
        {
          day: {
            name: "TUE",
            num: "08",
          },
          icon: "308",
          temp: "11",
          status: "HEAVY RAIN",
        },
        {
          day: {
            name: "SUN",
            num: "12",
          },
          icon: "116",
          temp: "18",
          status: "CLOUDY",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
