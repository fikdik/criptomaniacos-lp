import googleFontsOptions from './googleFontsOptions.json';

const cmsConfigFile = {
  file: 'src/content/settings/googleFonts.json',
  label: 'Google Fonts',
  label_singular: 'Google Font',
  name: 'googleFonts',
  fields: [
    {
      label: 'Fonts',
      name: 'fonts',
      widget: 'list',
      max: 3,
      fields: [
        {
          label: 'Family',
          name: 'family',
          widget: 'select',
          options: googleFontsOptions,
        },
        {
          label: 'Variants',
          name: 'variants',
          widget: 'select',
          multiple: true,
          options: ['100', '200', '300', '400', '500', '600', '700', '900'],
        },
      ],
    },
  ],
};

export default cmsConfigFile;
