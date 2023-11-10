// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  ssr: "server",
  target: "static",
  // experimental: {
  //   payloadExtraction: false,
  // },
  app: {
    head: {
      title: "Weather Prediction App | Developed by Mehdi Rafiei",
    },
  },
  css: ["@/assets/css/main.css"],
});
