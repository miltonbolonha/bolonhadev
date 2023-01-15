require ("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `BolonhaDev - Codando desde 1998`,
    description: `Oi, sou o Bolonha Dev. 
                  Desenvolvedor web e de apps mobile. 
                  Aqui vou falar um pouco dos meus projetos e desafios.
                  Você encontrará também alguns devANEIOS e pensamentos.`,
    author: `@BolonhaDev`,
    email: `fala@bolonha.dev`,
    siteUrl: `http://localhost:9001`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        enablePartialUpdates: true,
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-relative-images`,
          options: {
            name: `uploads`
          }
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 695,
            linkImagesToOriginal: false
          }
        },
        `gatsby-remark-lazy-load`,
      ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-remark-prismjs`,
    `gatsby-plugin-sharp`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `BolonhaDev`,
          short_name: `BolonhaDev`,
          start_url: `/`,
          background_color: `#040508`,
          theme_color: `#282a36`,
          display: `fullscreen`
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
