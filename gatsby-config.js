module.exports = {
  siteMetadata: {
    title: `Riverway Studios`,
    description: `Recording and rehearsal studio in Harlow, Essex`,
    author: `@riverwaystudios`,
    siteUrl: `https://riverwaystudios.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4389C7`,
        theme_color: `#4389C7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
  ],
};
