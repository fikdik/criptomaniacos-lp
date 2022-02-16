const urlField = {
  label: 'Url',
  name: 'url',
  widget: 'string',
  default: 'https://',
  pattern: [
    '(https?:/||)(/[da-z.-]+)([/w.-]*)*?',
    'A url must start with "https://" and have no spaces or special characters. Start with / for internal site pages',
  ],
};

export default urlField;
