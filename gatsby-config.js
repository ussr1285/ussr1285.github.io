module.exports = {
  siteMetadata: {
    title: `Minjae Joe`,
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
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 500, // 참고: It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this as the base for generating different widths of each image.
            },
          }
        ]
      },
    },

  ],
}


