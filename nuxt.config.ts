// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ["@/assets/css/main.css"],
  modules: ["@unocss/nuxt"],
  plugins: ["~/plugins/ip.js"],
  app: {
    // baseURL: "/weather/",
    buildAssetsDir: "/weather/_nuxt/",
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.WEATHER_API_BASE_URL,
      apiKey: process.env.WEATHER_API_KEY
    }
  }
});
