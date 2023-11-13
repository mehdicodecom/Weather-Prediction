// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: "server",
  target: "static",
  css: ["@/assets/css/main.css"],
  modules: ["@unocss/nuxt"],
  plugins: ["~/plugins/ip.js"],
  app: {
    // baseURL: "/weather/",
    buildAssetsDir: "/weather/_nuxt/",
  },
});
