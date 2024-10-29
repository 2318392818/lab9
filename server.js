const express = require('express');
const userRouter = require('./userRouter');
// 创建app对象
const app = express();
// 编写中间件
app.post('/login', (req, res, next) => {
// 登录逻辑
});
app.get('/home', (req, res, next) => {
// ⾸⻚逻辑
});
// 使⽤⽤户路由器
app.use('/users', userRouter);
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});