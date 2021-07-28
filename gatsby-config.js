
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'AdaMobile',
  },
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',],
};
