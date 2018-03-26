var express = require('express');

var portNumber = 3001;
var app = express();

app.get("/", function (req, res) {
    res.send("我是来自3001端口的数据");
})

app.listen(portNumber, function () {
    console.log("监听目标端口 "+ portNumber);
});