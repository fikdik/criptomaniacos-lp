const reqFields = require.context('./files', true, /\.js$/);
const paths = reqFields.keys();

const files = paths.map((path) => reqFields(path).default);

const config = {
  label: 'Settings',
  name: 'settings',
  files,
};

export default config;
