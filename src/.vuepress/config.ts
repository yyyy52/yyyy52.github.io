import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/yyyy52.github.io/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客",
      description: "设置中的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
