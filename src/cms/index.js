import CMS from 'netlify-cms-app';
import publicKeys from '../content/settings/publicKeys.json';
import packageJson from '../../package.json';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { collections } from './collections';

const repo = packageJson.repository
  ? packageJson.repository.split('github.com/')[1].split('.git')[0]
  : null;

let config = {
  backend: {
    name: 'github',
    branch: 'main',
    repo,
  },
  display_url: window.location.origin,
  // publish_mode: "editorial_workflow",
  slug: {
    encoding: 'unicode',
    clean_accents: true,
  },
  collections,
};

if (publicKeys?.cloudinary?.api_key) {
  CMS.registerMediaLibrary(cloudinary);
  config.media_library = {
    name: 'cloudinary',
    config: publicKeys.cloudinary,
    default_transformations: [
      [
        {
          width: 1600,
          height: 1200,
          quality: 'auto',
          crop: 'limit',
        },
      ],
    ],
  };
} else {
  config = {
    ...config,
    media_folder: 'static/img',
    media_folder_relative: true,
    public_folder: '/img',
    max_file_size: 512000,
  };
}

if (process.env.NODE_ENV === 'development') {
  // config.local_backend = true
  config.local_backend = {
    url: 'http://localhost:8081/api/v1',
    allowed_hosts: ['192.168.*.*'],
  };
}

CMS.init({ config });
