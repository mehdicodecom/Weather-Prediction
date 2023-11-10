<template>
  <section
    class="relative mx-auto mt-14 rounded-lg h-180 overflow-hidden w-100 shadow-lg flex flex-col"
  >
    <img src="imgs/sunny.jpg" alt="" class="w-full rounded-lg absolute -z-20" />

    <div class="px-6 text-white">
      <div class="flex justify-between mb-6 mt-8">
        <div class="relative text-center py-2 flex flex-col items-start">
          <h2 class="text-3xl font-bold bg-dark-800/30 inline-block px-2">
            Tehran
          </h2>
          <h3 class="text-xl font-medium bg-dark-800/30 inline-block px-2">
            Iran
          </h3>
        </div>

        <span
          class="inline-flex items-center justify-center bg-white h-10 w-10 rounded-full"
        >
          <svg class="relative w-5 h-5 text-gray-500">
            <use href="icons.svg#search"></use>
          </svg>
        </span>
      </div>

      <div>
        <p class="relative">
          <span class="text-4xl font-bold">25</span>
          <span class="absolute top-0 text-5xl">°</span>
        </p>
        <h3 class="font-bol">Sunny</h3>
      </div>
    </div>

    <div class="bg-white rounded-t-2xl h-90 mt-auto py-8">
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
  </section>
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
          temp: "25",
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
