import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  preflight: true,
  safelist: [],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      main: {
        dark: "#1C1C1C",
        light: "#FAFAFA",
        green: "#00DC82",
        gray: "#343334",
        orange: "#F47A08",
        cyan: "#07FFFF",
      },
    },

    breakpoints: {
      xs: "320px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",
    },
  },
});
