var ghRelease = require('gh-release')
var packageInfo = require('../package.json')
require('dotenv').config()

var options = {
  tag_name: `v${packageInfo.version}`,
  target_commitish: 'master',
  name: `v${packageInfo.version}`,
  draft: false,
  prerelease: false,
  repo: 'layercake',
  owner: 'mcarlucci',
  assets: ['dist/layercake.js', 'dist/layercake.min.js', 'dist/layercake.es.js'],
  endpoint: 'https://api.github.com',
  auth: {
    token: process.env.TOKEN
  }
}

ghRelease(options, function (err, result) {
  if (err) throw err
  console.log(result) // create release response: https://developer.github.com/v3/repos/releases/#response-4
})
