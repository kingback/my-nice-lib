module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: process.env.BABEL_BUILD_TYPE === 'esm' ? false : 'commonjs'
    }]
  ]
};