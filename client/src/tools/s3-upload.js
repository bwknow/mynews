const s3 = require('s3');
const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');

module.exports = task('upload', () => Promise.resolve()
  .then(() => Uploader)
);
const Uploader = new Promise((resolve, reject) => {
  const client = s3.createClient({
  s3Options: {
      accessKeyId: '',
      secretAccessKey: '',
      region: 'us-west-2',
      sslEnabled: true,
    },
  });
  const uploader = client.uploadDir({
    localDir: 'build/',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'bk-headlines'
    },
  });
  uploader.on('error', reject);
  uploader.on('end', resolve);
});
