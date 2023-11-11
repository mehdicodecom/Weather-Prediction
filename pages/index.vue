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
          <span class="text-5xl font-bold">25</span>
          <sup class="absolute top-0 text-5xl">°</sup>
          <span class="text-xl ml-1">avg</span>
        </p>
        <h3 class="font-bold">Sunny</h3>
      </div>

      <div class="mt-8 flex gap-10">
        <p class="relative">
          <span class="text-3xl font-bold">38</span>
          <sup class="absolute top-0 text-3xl">°</sup>
          <span class="text-sm ml-1">Max temp</span>
        </p>

        <p class="relative">
          <span class="text-3xl font-bold">15</span>
          <sup class="absolute top-0 text-3xl">°</sup>
          <span class="text-sm ml-1">Min temp</span>
        </p>
      </div>
    </div>

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
          <span class="text-xl">30%</span>
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

    <div class="translate-y-full mt-auto">
      <button
        class="bg-green-500/85 relative -top-16 mb-4 text-white flex h-12 w-11/12 mx-auto items-center justify-center rounded-lg"
      >
        Show weather forecast
      </button>

      <div
        class="relative z-10 bg-white rounded-t-2xl h-96 overflow-hidden py-6"
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
  setup() {
    const ip = useState("ip");

    onBeforeMount(() => {
      console.log(ip.value); // user IP
    });
  },
};
</script>

<style scoped></style>
