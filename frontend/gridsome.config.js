// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const resolve = require("path").resolve;

module.exports = {
  siteName: "Strapi Gridsome Blog",
  siteDescription: "A blog site made using Gridsome and Strapi",
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url:
          (process.env.GRIDSOME_STRAPI_URL || "http://localhost:1337") +
          "/graphql",
        fieldName: "strapi",
        typeName: "strapiTypes",
      },
    },
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        // provide path to the file with resources
        resources: resolve(__dirname, "./src/assets/*.scss"),
      },
    },
  ],
};
