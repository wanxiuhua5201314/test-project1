var http = require('http');
var url = require("url");
http.createServer(function (request, response) {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  response.writeHead(200, { 
    //解决跨域的问题
    'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*' });
  var pathname = url.parse(request.url).pathname;
  /* console.log("pathname", pathname); */
  //根据自己的接口模拟数据
  let jsonObject = {
      name: 'wanxiuhua',
      age: 18
  };
  let jsonObject1 = {
      name: 'wx',
      age: 14
  };
  let ss = JSON.stringify(jsonObject);
  let ss1 = JSON.stringify(jsonObject1);
  //pathname的值，在浏览器里输入url时可以输入自己想要的接口，与这里匹配就行
  if (pathname === '/info') {
    response.end(ss1);
  } else {
    response.end(ss);
  }
}).listen(8081);
console.log("服务启动成功")