
const{createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/ajax',
        createProxyMiddleware({
            target:'https://i.maoyan.com',
            changeOrigin:true,
            //必要时必须加入header
            headers:{
                "User-Agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
              }
        })
    );
};
