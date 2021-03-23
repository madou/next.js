const { CompiledExtractPlugin } = require('@compiled/webpack-loader')

module.exports = {
  webpack: (config, options) => {
    const extract = !options.isServer && !options.dev

    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: '@compiled/webpack-loader',
        options: { extract },
      },
    })

    if (extract) {
      config.plugins.push(new CompiledExtractPlugin())
    }

    return config
  },
}
