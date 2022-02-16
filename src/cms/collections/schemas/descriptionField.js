const descriptionField = {
  label: 'Description',
  name: 'description',
  widget: 'string',
  pattern: [
    '.{20,500}',
    'Must have at least 20 characters and not more than 500',
  ],
  required: false,
};

export default descriptionField;
