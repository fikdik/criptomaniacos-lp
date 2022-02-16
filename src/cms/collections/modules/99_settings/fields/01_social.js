import { urlField } from '../../../schemas';

const cmsConfigFile = {
  file: 'src/content/settings/social.json',
  label: 'Social Network',
  name: 'social',
  fields: [
    {
      label: 'Social Networks',
      name: 'networks',
      widget: 'list',
      fields: [
        {
          label: 'Network',
          name: 'network',
          widget: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Youtube', value: 'youtube' },
          ],
        },
        { ...urlField },
      ],
    },
  ],
};

export default cmsConfigFile;
