const cmsConfigFile = {
  file: 'src/content/settings/manifest.json',
  label: 'Manifest',
  name: 'manifest',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    { label: 'Short Name', name: 'shortName', widget: 'string' },
    { label: 'Start URL', name: 'startUrl', widget: 'string' },
    {
      label: 'Background Color',
      name: 'bgColor',
      widget: 'color',
    },
    { label: 'Theme Color', name: 'themeColor', widget: 'color' },
    {
      label: 'Orientation',
      name: 'orientation',
      widget: 'select',
      options: [
        { label: 'Portrait', value: 'portrait' },
        { label: 'Landscape', value: 'landscape' },
      ],
      default: ['portrait'],
    },
    {
      label: 'Display',
      name: 'display',
      widget: 'select',
      options: ['standalone'],
      default: ['standalone'],
    },
    {
      label: 'Icon',
      name: 'icon',
      widget: 'image',
      media_library: {
        name: 'github',
      },
    },
  ],
};

export default cmsConfigFile;
