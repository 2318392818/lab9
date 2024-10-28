const express = require('express');
// 创建app对象
const app = express();
// 应⽤⼀些中间件
app.use(express.json()); // 解析客户端传递过来的json
// 解析传递过来的urlencoded数据, 默认使⽤的是node的内置querystring模块
// { extended: true }: 表⽰不再使⽤内置的querystring, ⽽是使⽤qs第三⽅库
app.use(express.urlencoded({ extended: true })); //解析客户端传递过来的urlencoded数据
// 编写中间件
app.post('/login', (req, res, next) => {
console.log(req.body);
res.end('登录成功, 欢迎回来~');
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});