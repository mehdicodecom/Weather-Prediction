<template>
  <section
    class="relative mx-auto mt-14 rounded-lg h-180 overflow-hidden w-100 shadow-lg flex flex-col"
  >
    <img src="imgs/sunny.jpg" alt="" class="w-full rounded-lg absolute -z-20" />

    <div class="px-6 text-white">
      <div class="flex justify-between mb-6 mt-8">
        <Location />

        <Search />
      </div>

      <Today-Temperature />
    </div>

    <Today-WeatherDetails />

    <Forecasts />
  </section>
</template>

<script>
export default {
  setup() {
    const ip = useState("ip");

    onBeforeMount(() => {
      console.log(ip.value); // user IP
    });
  },
};
</script>

<style scoped></style>
