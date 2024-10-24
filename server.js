const express = require('express');
const app = express();
// 总结: 当express接收到客户端发送的⽹络请求时, 在所有中间件中开始进⾏匹配
// 当匹配到第⼀个符合要求的中间件时, 那么就会执⾏这个中间件
// 后续的中间件是否会执⾏呢? 取决于上⼀个中间件有没有执⾏next
// 通过use⽅法注册的中间件是最普通的/简单的中间件
// 通过use注册的中间件, ⽆论是什么请求⽅式都可以匹配上
// login/get, login/post, abc/patch等
app.use((req, res, next) => {
 console.log('normal middleware 01');
 // 例如： res.end('返回结果了, 不要等了'); // 若取消注释，将阻⽌后续中间件执⾏
 next();
});
app.use((req, res, next) => {
 console.log('normal middleware 02');
});
// 开启服务器
app.listen(9000, () => {
 console.log('Express服务器启动成功~');
});