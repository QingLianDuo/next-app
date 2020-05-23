const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}
const themeVariables = lessToJS(
fs.readFileSync(path.resolve(__dirname, './public/modifyVars.less'), 'utf8')
)

module.exports = withLess({
  lessModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
})