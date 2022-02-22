const path = require('path');
const siteMetadata = require('./src/content/settings/siteMetadata.json');
const publicKeys = require('./src/content/settings/publicKeys.json');

let plugins = [
  `gatsby-plugin-netlify`,
  {
    resolve: `gatsby-plugin-netlify-cms`,
    options: {
      manualInit: true,
      modulePath: path.join(__dirname, `src`, `cms`, `index.js`),
      // stylesPath: path.join(__dirname, `src`, `cms`, `admin.css`),
      // enableIdentityWidget: true, // Netlify identity
      publicPath: `_admin`,
      htmlTitle: `${siteMetadata.title} CMS Panel`,
      // htmlFavicon: `/icons/64x64.png`,
    },
  },
];

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
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `cms`,
      path: path.join(__dirname, `src`, `content`),
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  }
);

module.exports = {
  siteMetadata,
  plugins,
};
