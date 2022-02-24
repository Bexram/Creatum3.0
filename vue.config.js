module.exports = {
    devServer: {
        disableHostCheck: true
    },
    pwa: {
        workboxOptions: {
            exclude: [/_redirects/]
        }
    }
}