
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

    assetsDir: '',
    productionSourceMap: false,

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'ru',
        localeDir: ' locales',
        enableInSFC: false,
        includeLocales: false,
        enableBridge: true
      }
    }
}
