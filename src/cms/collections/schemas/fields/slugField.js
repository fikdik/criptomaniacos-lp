const slugField = {
  label: 'Slug',
  name: 'slug',
  widget: 'string',
  pattern: [
    '^(/[a-z0-9]*)(?:-[a-z0-9]+)*$',
    'A slug can have no spaces or special characters',
  ],
  hint: 'The post URL (do not include folder or file extension) and must start with a slash "/"',
};

export default slugField;
