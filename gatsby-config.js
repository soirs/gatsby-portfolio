module.exports = {
  siteMetadata: {
    title: 'Frank Richard Semakula',
    url: 'https://frankrs.dk/',
    description: 'Frank is the talent you seek',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124489759-1',
      },
    },
  ],
}