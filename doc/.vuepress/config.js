const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Taoning's Blog",
  description: "A student, love programing, CPO as well.",

  dest: "./dist",

  head: [
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/1E725C310250DAE6D3E72599AD8D4F21.png",
    hostname: "https://getaoning.com",

    pwa: false,

    author: "Taoning",

    nav: [
      { text: "首页", link: "/", icon: "home" },
      {
        text: "分类",
        link: "/category/",
        icon: "categoryselected",
      },
    ],

    sidebar: {},

    blog: {
      // intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/si-ni-ba-zhang",
        Github: "https://github.com/gtn1024",
        Gmail: "mailto:gtn1024cc@gmail.com",
        Twitter: "https://twitter.com/gtn1024",
        Telegram: "https://t.me/gtn1024",
        Gitee: "https://gitee.com/gtn",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom", "anything", "audio", "chalkboard"],
      },
    },
  },
});
