const express = require('express');
// 创建app对象
const app = express();
// 编写中间件⽤于处理/login路由的POST请求
app.post('/login', (req, res, next) => {

res.end('登录成功, 欢迎回来~');
// 2. 使⽤res.json⽅法（最常⽤）
// 返回JSON格式的数据
/*
res.json({
code: 0,
message: '欢迎回来~',
list: [
{ name: 'iPhone', price: 111 },
{ name: 'iPad', price: 111 },
{ name: 'iMac', price: 111 },
{ name: 'Mac', price: 111 },
]
});
*/
// 3. 使⽤res.status⽅法设置HTTP状态码，结合res.json
res.status(201); // 设置状态码为201（资源已创建）
res.json('创建⽤户成功~'); // 返回信息
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});