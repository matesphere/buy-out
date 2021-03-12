module.exports = {
  siteMetadata: {
    title: "buy-out",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GA123456",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Ruda',
              variants: ['500', '700', '900'],
              fontDisplay: 'swap',
              subsets: ['latin-ext'],
            },
            {
              family: 'Roboto Slab',
              variants: ['500', '700'],
              fontDisplay: 'swap',
              subsets: ['latin-ext'],
            },
          ],
        },
        usePreconnect: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
