import { descriptionField } from '../../schemas';

const metadataObject = {
  label: 'Metadata',
  name: 'metadata',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      hint: 'to long titles will be truncate at search engines',
      required: false,
    },
    descriptionField,
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
    },
    {
      label: 'Updated Date',
      name: 'dateModified',
      widget: 'datetime',
    },
    {
      label: 'Published Date',
      name: 'datePublished',
      widget: 'datetime',
    },
  ],
};

export default metadataObject;
