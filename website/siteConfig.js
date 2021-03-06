/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: "kintone UI Component",
  tagline: "Be a smart kintone developer",
  subTagline: "It will support your UI customization project.",
  // For Netlify hosting
  url: "",
  baseUrl: "/docusaurus/",
  projectName: "docusaurus",
  organizationName: "nmanhit",
  headerLinks: [
    { doc: "getting-started/quick-start", label: "Documentation" },
    { doc: "releases/release-notes", label: "Releases" },
    {
      href: "https://github.com/nmanhit/docusaurus",
      label: "GitHub",
      external: true,
    },
    { search: true },
    { languages: true }
  ],
  headerIcon: "img/kuc_logo_white.png",
  footerIcon: "img/kuc_box_white.png",
  favicon: "img/kuc_box_yellow.png",
  colors: {
    primaryColor: "#2b3137",
    secondaryColor: "#03A9F4",
  },
  fonts: {
    myFont: ["Times New Roman", "Serif"],
    myOtherFont: ["-apple-system", "system-ui"],
  },
  copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
  highlight: {
    theme: "atom-one-dark", // "Nord", "Dracula", "Monokai Sublime"
    defaultLang: "javascript",
  },
  onPageNav: "separate",
  docsSideNavCollapsible: true,
  cleanUrl: true,
  ogImage: "img/kuc_box_yellow.png",
  twitterImage: "img/kuc_box_yellow_twitter.png",
  disableHeaderTitle: true,
  scrollToTop: true,
  enableUpdateTime: true,
  blogSidebarCount: "ALL",
  blogSidebarTitle: { default: "Recent posts", all: "All posts" },
  scripts: [
    "/docusaurus/js/gtmHeader.js",
    "/docusaurus/js/extra.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/docusaurus/js/code-block-button.js",
    "/docusaurus/js/kuc-loader.js"
  ],
  // For Algolia DocSearch
  algolia: {
    apiKey: "df2e0c3351b9e7e24fd66f2e79e615d0",
    indexName: "kintone",
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE", "version:VERSION"],
    },
  },
};

module.exports = siteConfig;
