const express = require('express');
const app = express();
// 给express创建的app传⼊⼀个回调函数
// 传⼊的这个回调函数就称之为是中间件(middleware)
// app.post('/login', 回调函数 => 中间件)
app.post('/login', (req, res, next) => {
 // 1.中间件中可以执⾏任意代码
 console.log('first middleware exec~');
 // 其他操作，如查询数据、判断逻辑等等
 // 2.在中间件中修改req/res对象
 req.age = 99;
 // 3.可以在中间件中结束响应周期
 // res.json({ message: "登录成功, 欢迎回来", code: 0 });
 // 4.执⾏下⼀个中间件
 next();
});
app.use((req, res, next) => {
 console.log('second middleware exec~');
});
app.listen(9000, () => {
 console.log('Express服务器启动成功~');
});