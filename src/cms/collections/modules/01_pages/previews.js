import CMS from 'netlify-cms-app';

const reqPreviews = require.context('./previews', true, /\.js$/);
const paths = reqPreviews.keys();

const previews = paths.map((path) => {
  const module = reqPreviews(path);
  return {
    name: path.slice(2, -3),
    template: module.default,
  };
});

export default function registerPreview() {
  previews.map((preview) =>
    CMS.registerPreviewTemplate(preview.name, preview.template)
  );
}
