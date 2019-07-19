module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://abundant.xjkrfx.net',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    }
}