/**
 * @Author liming
 * @Date 2023/4/19 17:56
 **/

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://127.0.0.1:9000',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};

