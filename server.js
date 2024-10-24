const express = require('express');
const app = express();
// app.get(路径, 中间件1, 中间件2, 中间件3)
app.get('/home',
 (req, res, next) => {
 console.log('match /home get middleware01');
 next();
 },
 (req, res, next) => {
 console.log('match /home get middleware02');
 next();
 },
 (req, res, next) => {
 console.log('match /home get middleware03');
 next();
 },
 (req, res, next) => {
 console.log('match /home get middleware04');
 res.end('All middleware executed');
 }
);
app.listen(9000, () => {
 console.log('Express服务器启动成功~');
});