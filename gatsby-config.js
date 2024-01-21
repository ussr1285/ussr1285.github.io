module.exports = {
  siteMetadata: {
    title: `Joe's Blog`,
    siteUrl: `https://ussr1285.github.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 500, // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this as the base for generating different widths of each image.
            }
          },
          "gatsby-remark-responsive-iframe"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "GTM-T2RJJWHT",
        head: true,
        anonymize: true,
      }
    },
  ]
}
