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
    "gatsby-transformer-sharp"
  ],
}


