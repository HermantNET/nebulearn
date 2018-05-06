/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const generateBabelConfig = require('gatsby/dist/utils/babel-config')

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
  }

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.loader('raw', {
      test: /\.(md|txt)$/,
      loader: 'raw-loader',
    })
  })
}

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-regenerator']),
})
