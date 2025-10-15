import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "Mike的博客",
      description: "记录Mike的成长轨迹",
    },
    "/": {
      lang: "en-US",
      title: "Mike's Blog",
      description: "Documenting Mike's growth",
    }
  },

  theme,

  plugins: []

  // Enable it with pwa
  // shouldPrefetch: false,
});
