var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/web')
    .addEntry('app', './assets/js/app.js')
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .addEntry('style', './assets/scss/main.scss')
    .autoProvidejQuery()

module.exports = Encore.getWebpackConfig();