const express = require('express');
// 创建app对象
const app = express();
// 1. 解析queryString
app.get('/home/list', (req, res, next) => {
// 从URL中解析offset和size
const queryInfo = req.query; // 通过req.query获取查询字符串中的参数对象
console.log(queryInfo);
res.end('data list数据');
});
// 2. 解析params参数
app.get('/users/:id', (req, res, next) => {
const id = req.params.id; // 从req.params中提取路径参数
res.end(`获取到${id}的数据~`);
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});