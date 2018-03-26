var express = require('express');
var app = express();

var responsePort = 3001;  // 响应请求的页面跑在3001端口

// 可以改变‘/’为其他的路径，改完之后serverReq.js里面的请求路径也需要改变
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // 设置允许跨域的origin，允许3000端口访问3001端口，第二个参数可设置为*
    res.send("发起请求至3001端口，本地部署端口3000"); 
});

app.listen(responsePort, function () {
    console.log('监听跨域目标'+ responsePort+'端口');
});