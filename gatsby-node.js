const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const cmsPages = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "pages/*" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `);
  if (cmsPages.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsPages'
    );
  }
  cmsPages.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter;
    if (slug === '/__dummy') {
      return;
    }
    createPage({
      path: slug,
      component: templateKey
        ? path.resolve(`./src/templates/${templateKey}.jsx`)
        : path.resolve(`./src/templates/default.jsx`),
      context: { id: node.id },
    });
  });
};
