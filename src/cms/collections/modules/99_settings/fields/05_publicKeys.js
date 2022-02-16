const cmsConfigFile = {
  file: 'src/content/settings/publicKeys.json',
  label: 'Public Keys',
  name: 'publicKeys',
  fields: [
    {
      label: 'Google gTag',
      name: 'gtag',
      required: false,
    },
    {
      label: 'Google TagManager',
      name: 'gTagManager',
      required: false,
    },
    {
      label: 'Facebook Pixel',
      name: 'fbPixel',
      required: false,
    },
    {
      label: 'tawk.to',
      name: 'tawkto',
      required: false,
    },
    {
      label: 'Cloudinary',
      name: 'cloudinary',
      widget: 'object',
      required: false,
      fields: [
        { label: 'Cloud Name', name: 'cloud_name', required: false },
        { label: 'API Key', name: 'api_key', required: false },
      ],
    },
  ],
};

export default cmsConfigFile;
