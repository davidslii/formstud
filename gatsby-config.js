module.exports = {
  siteMetadata: {
    title: `Form Stud(y)`,
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `formstud.myshopify.com/`,
        // The storefront access token
        accessToken: `b8a5f2962c7e20855b924ec40dee0b76`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://formstud.us1.list-manage.com/subscribe/post?u=23f9c09d26ab4ea98d5c89e4b&amp;id=e0bdccb8cd', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-less',
          options: {
              lessOptions: {
                  javascriptEnabled: true,
                 modifyVars: {
                     'primary-color': '#000000'
                },
             },
         },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}