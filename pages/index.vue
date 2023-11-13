<template>
  <title>Weather Prediction App | Developed by Mehdi Rafiei</title>
  <section class="flex items-center justify-center min-h-screen">
    <div
      class="relative rounded-lg h-180 overflow-hidden md:(w-100) xs:(w-96 mt-0) shadow-lg flex flex-col"
    >
      <img
        :src="getImage"
        alt=""
        class="w-full h-full rounded-lg absolute -z-20"
      />

      <div class="px-6 text-white">
        <Search @search="searchByCity" />
        <div class="mb-6 mt-20">
          <Location :location="weatherData.location" />
        </div>

        <Today-Temperature :today="todayWeather" />
      </div>
      <Today-WeatherDetails :today="todayWeather" />

      <Forecasts :forecasts="forecasts" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const apiKey = "986f6a0669254a4c84e95154231011";
    const ip = useState("ip");
    const { data, pending } = useLazyFetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ip.value}&days=11&aqi=no&alerts=no`
    );

    const searchByCity = async (city) => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=11&aqi=no&alerts=no`;

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
  data() {
    return {
      imgURL: null,
    };
  },
  computed: {
    todayWeather() {
      return this.weatherData.forecast.forecastday[0].day;
    },
    forecasts() {
      return this.weatherData.forecast.forecastday;
    },
    currentWeather() {
      return this.weatherData.current;
    },
    getImage() {
      let dayOrNight = this.currentWeather.is_day ? "day" : "night";
      let imgName = this.currentWeather.condition.text;
      let condition = this.currentWeather.condition.text.toLowerCase();
      let imgFolder = `imgs/${dayOrNight}/`;

      let existedFileNames = [
        "Sunny",
        "Blowing snow",
        "Clear",
        "cloudy",
        "mist",
        "overcast",
        "Partly cloudy",
        "Patchy freezing drizzle possible",
        "Patchy rain possible",
        "Patchy sleet possible",
        "Patchy snow possible",
      ];
      if (!existedFileNames.includes(imgName)) {
        if (condition.includes(" rain ")) {
          imgName = "Patchy rain possible";
        } else if (condition.includes(" snow ")) {
          imgName = "Patchy freezing drizzle possible";
        } else {
          imgName = "Partly cloudy";
        }
      }

      let imgURL = `${imgFolder + imgName}.jpg`;
      return imgURL;
    },
  },
};
</script>

<style scoped></style>
