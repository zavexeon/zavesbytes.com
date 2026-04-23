// SPDX-License-Identifier: 0BSD
module.exports = function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");;
  eleventyConfig.addPassthroughCopy("src/assets/**");
}
