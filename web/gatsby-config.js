module.exports = {
  siteMetadata: {
    title: 'A11Y Slider - Library for simple and accessible sliders',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'A11Y Slider',
        short_name: 'a11yslider',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
        include_favicon: false
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
  ],
};
