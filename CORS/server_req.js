var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 3000;  // 请求页面跑在3000端口

app.use(express.static(__dirname)); //3000端口的静态文件，自动找寻html,即index.html

// __dirname始终指向当前js代码文件(serverReq.js)所在的目录, 在我的本地目录是D:\cross-domain\CORS
// 上面“express.static(__dirname + '/static')”的意思项目的静态文件目录在 D:\cross-domain\CORS\static

app.listen(requestPort, function () {
    console.log('监听本地部署'+ requestPort+'端口'); // 在dos窗口会执行这个回调函数
});