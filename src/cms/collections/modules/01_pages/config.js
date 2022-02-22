import fields from './fields';

const config = {
  label: 'Pages',
  label_singular: 'Page',
  name: 'pages',
  folder: 'src/content/pages',
  create: true,
  delete: true,
  extension: 'mdx',
  format: 'frontmatter',
  media_folder: '../../../static/img/pages',
  public_folder: '/img/pages',
  summary: '{{title}}',
  sortable_fields: ['title', 'metadata.dateModified'],
  fields,
};

export default config;
