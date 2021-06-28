const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Taoning's Blog",
  description: "A student, love programing, CPO(Chief Procrastination Officer) as well.",

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
      {
        text: "编程语言",
        icon: "code",
        items: [
          {
            text: "Java",
            link: "/java/",
            icon: "java",
          },
        ],
      },
      {
        text: "关于",
        link: "/about",
        icon: "info",
      },
    ],

    sidebar: {
      "/java/": [{ title: "基础教程", children: ["setup-java-env-from-scratch", "the-first-program-of-java"] }],
    },

    blog: {
      intro: "/about/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/gtn1024",
        Github: "https://github.com/gtn1024",
        Gmail: "mailto:gtn1024cc@gmail.com",
        Twitter: "https://twitter.com/gtn1024",
        Telegram: "https://t.me/gtn1024",
        Gitee: "https://gitee.com/gtn",
      },
    },

    footer: {
      display: true,
      // content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://blog-waline-api-two.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
      contributor: false,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom", "anything", "audio", "chalkboard"],
      },
    },
  },

  plugins: [
    [
      "vuepress-plugin-baidu-tongji-analytics",
      {
        key: "dfa0bfe04b149648b32789f343813365",
      },
    ],
  ],
});
