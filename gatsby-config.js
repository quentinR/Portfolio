module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Quentin Ribierre',
    description: 'Engineer focused on iOS and mobile',
    keywords: 'ios engineer, product engineer, portfolio, personal website',
    url: 'https://www.quentinribierre.com'
  }
};
