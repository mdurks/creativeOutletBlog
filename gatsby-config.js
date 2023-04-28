/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Creative Outlet Blog`,
    description: `Michael Durkins blog for all things web, 3D and general tech related topics.`,
    author: `mdurks@gmail.com`,
    siteUrl: `https://creativeoutletblog.netlify.app//`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type:
        typeName: "GCMS",
        // The field you'll query against:
        fieldName: "gcms",
        // The API endpoint:
        url: "https://api-eu-west-2.hygraph.com/v2/clfpgsk7s0zsx01ughihedi3j/master",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Creative Outlet Blog`,
        short_name: `Creative Outlet Blog`,
        start_url: `/`,
        background_color: `#041d20`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#041d20`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       // families: ["Dosis:500", "Sofia Sans Condensed:800"],
    //       families: [
    //         "Roboto Condensed:300, 700",
    //       ],
    //     },
    //   },
    // },
  ],
}
