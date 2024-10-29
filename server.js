const express = require('express');
const multer = require('multer');
// 创建app对象
const app = express();
// 使⽤Express内置的中间件解析JSON和URL编码数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 设置Multer实例
const formdata = multer();
// 编写处理请求体的中间件，使⽤formdata.any()处理任意表单请求数据
app.post('/login', formdata.any(), (req, res, next) => {
console.log(req.body); // 打印请求体中解析的普通数据
res.end('登录成功, 欢迎回来~');
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});