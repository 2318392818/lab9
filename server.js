const express = require('express');
const app = express();
// 使⽤Express内置的JSON中间件解析JSON数据
app.use(express.json());
// 注册两个实际请求的中间件
app.post('/login', (req, res, next) => {
 // 通过Express内置的中间件，req.body已经拥有解析后的JSON数据
 const { username, password } = req.body;
 console.log(req.body);
 if (username === 'gkd' && password === '123456') {
 res.end('登录成功, 欢迎回来~');
 } else {
 res.end('登录失败, 请检测账号和密码是否正确~');
 }
});
// 案例⼆: 注册⽤户的请求处理 /register post => username/password
app.post('/register', (req, res, next) => {
 const { username } = req.body;
 console.log(req.body);
 // 模拟现有⽤户查询逻辑
 const existingUsers = ['existinguser'];
 if (existingUsers.includes(username)) {
 res.end('注册失败, 您输⼊的⽤户名被注册~');
 } else {
 res.end('注册成功, 开始你的旅程~');
 }
});
app.listen(9000, () => {
 console.log('Express服务器启动成功~');
});