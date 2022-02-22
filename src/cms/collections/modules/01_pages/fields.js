import {
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from '../../schemas';

const fields = [
  {
    ...templateKeyField,
    options: [{ label: 'Pages Detail', value: 'pages/detail' }],
    default: ['pages/detail'],
  },
  slugField,
  pageTitleField,
  {
    label: 'body',
    name: 'body',
    widget: 'markdown',
  },
  metadataObject,
];

export default fields;
