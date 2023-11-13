<template>
  <section
    class="relative mx-auto mt-14 rounded-lg h-180 overflow-hidden w-100 shadow-lg flex flex-col"
  >
    <img src="imgs/sunny.jpg" alt="" class="w-full rounded-lg absolute -z-20" />

    <div class="px-6 text-white">
      <Search @search="searchByCity" />
      <div class="mb-6 mt-20">
        <Location :location="weatherData.location" />
      </div>

      <Today-Temperature :today="todayWeather" />
    </div>
    <Today-WeatherDetails :today="todayWeather" />

    <Forecasts :forecasts="forecasts" />
  </section>
</template>

<script>
export default {
  setup() {
    const apiKey = "986f6a0669254a4c84e95154231011";
    const ip = useState("ip");
    const { data, pending } = useLazyFetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ip.value}&days=11&aqi=no&alerts=no`
    );

    const searchByCity = async (city) => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=11&aqi=no&alerts=no`;

      await $fetch(url).then((res) => {
        data.value = res;
      });
    };

    return {
      weatherData: data,
      isLoading: pending,
      searchByCity,
    };
  },
  computed: {
    todayWeather() {
      return this.weatherData.forecast.forecastday[0].day;
    },
    forecasts() {
      return this.weatherData.forecast.forecastday;
    },
  },
};
</script>

<style scoped></style>
