const cmsConfigFile = {
  file: 'src/content/settings/colors.json',
  label: 'Palette Colors',
  label_singular: 'Palette Color',
  name: 'colors',
  fields: [
    {
      label: 'Colors',
      name: 'colors',
      widget: 'list',
      fields: [
        {
          label: 'Label',
          name: 'label',
          widget: 'string',
        },
        {
          label: 'Colors',
          name: 'colors',
          widget: 'list',
          min: 1,
          max: 10,
          minimize_collapsed: true,
        },
        {
          label: 'Colors Reference Names',
          name: 'colorsRefs',
          widget: 'list',
          min: 1,
          max: 10,
          minimize_collapsed: true,
          required: false,
        },
      ],
    },
  ],
};

export default cmsConfigFile;
