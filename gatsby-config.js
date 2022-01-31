// const path = require('path');
const siteMetadata = require('./src/content/settings/siteMetadata.json');
const publicKeys = require('./src/content/settings/publicKeys.json');

let plugins = [`gatsby-plugin-netlify`, 'gatsby-plugin-netlify-cms'];

if (process.env.NODE !== 'development') {
  plugins.push({
    resolve: `gatsby-plugin-sitemap`,
    options: {
      exclude: [`/*/obrigado`],
    },
  });
  if (!!publicKeys.gtag) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: publicKeys.gtag,
      },
    });
  }
  if (!!publicKeys.tawkto) {
    plugins.push({
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: publicKeys.tawkto,
      },
    });
  }
}

plugins.push(
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
  'gatsby-plugin-mdx',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  }
);

console.log(
  `**************************************************  ${JSON.stringify(
    plugins
  )}   ******************************************* ${process.env.NODE} *******`
);

module.exports = {
  siteMetadata,
  plugins,
};
