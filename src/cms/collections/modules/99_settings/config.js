const reqFields = require.context('./fields', true, /\.js$/);
const paths = reqFields.keys();

const fields = paths.map((path) => reqFields(path).default);

const config = {
  label: 'Settings',
  name: 'settings',
  files: fields,
};

export default config;
