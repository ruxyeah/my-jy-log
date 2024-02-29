import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "public",
  base: "/",

  lang: "zh-CN",
  title: "我的简历",
  description: "关于我自己的学习成长经历",

  theme,

});
