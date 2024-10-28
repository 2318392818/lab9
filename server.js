const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const writeStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });
app.use(morgan('combined', { stream: writeStream }));
app.post('/login', (req, res, next) => {
res.end('登录成功, 欢迎回来~');
});
app.listen(9000, () => {
console.log('express服务器启动成功~');
});