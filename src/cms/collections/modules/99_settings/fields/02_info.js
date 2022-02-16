import { urlField } from '../../../schemas';

const cmsConfigFile = {
  file: 'src/content/settings/info.json',
  label: 'General Business Info',
  name: 'info',
  fields: [
    {
      label: '',
      name: 'networks',
      widget: 'list',
      fields: [
        {
          label: 'Email',
          name: 'email',
          widget: 'object',
          required: false,
          fields: [
            {
              label: 'Address',
              name: 'address',
              widget: 'string',
              required: false,
            },
            {
              label: 'Default Subject',
              name: 'subject',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'Phone',
          name: 'phone',
          widget: 'object',
          required: false,
          fields: [
            {
              label: 'Raw Full Number',
              name: 'number',
              widget: 'string',
              required: false,
            },
            {
              label: 'Display Number',
              name: 'display',
              widget: 'string',
              required: false,
            },
            {
              label: 'Whatsapp Message',
              name: 'message',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'Address',
          name: 'address',
          widget: 'object',
          required: false,
          fields: [
            {
              label: 'Display Address',
              name: 'display',
              widget: 'string',
              required: false,
            },
            {
              label: 'Locality (city)',
              name: 'locality',
              widget: 'string',
              required: false,
            },
            {
              label: 'Region (estate)',
              name: 'region',
              widget: 'string',
              required: false,
            },
            {
              label: 'Country',
              name: 'country',
              widget: 'string',
              required: false,
            },
            {
              label: 'Postal Code',
              name: 'postalCode',
              widget: 'string',
              required: false,
            },
            {
              ...urlField,
              required: false,
            },
            {
              label: 'Latitude',
              name: 'latitude',
              widget: 'string',
              required: false,
            },
            {
              label: 'Longitude',
              name: 'longitude',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'CPF / CNPJ',
          name: 'localID',
          widget: 'object',
          required: false,
          fields: [
            {
              label: 'Type',
              name: 'type',
              widget: 'select',
              options: ['CPF', 'CNPJ'],
              required: false,
            },
            {
              label: 'Legal Name',
              name: 'legalName',
              widget: 'string',
              required: false,
            },
            {
              label: 'Founding Date',
              name: 'foundingDate',
              widget: 'datetime',
              required: false,
            },
            {
              label: 'Display Number',
              name: 'display',
              widget: 'string',
              required: false,
            },
            {
              label: 'Raw Number',
              name: 'number',
              widget: 'string',
              required: false,
            },
            {
              label: 'Founders',
              name: 'founders',
              widget: 'list',
              required: false,
            },
          ],
        },
      ],
    },
  ],
};

export default cmsConfigFile;
