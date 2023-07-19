/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "release-notes": {
    "Releases": [
      "releases/release-notes-v1-0-3",
      "releases/release-notes-v1.0.2",
      "releases/release-notes-v1.0.1",
      "releases/release-notes-v1.0.0"
    ]
  }
};

module.exports = sidebars;
