const express = require('express');
// 创建⼀个路由器实例
const userRouter = express.Router();
// 定义⽤户相关的API
userRouter.get('/', (req, res, next) => {
res.json('⽤户列表数据');
});
userRouter.get('/:id', (req, res, next) => {
const id = req.params.id;
res.json('某⼀个⽤户的数据:' + id);
});
userRouter.post('/', (req, res, next) => {
res.json('创建⽤户成功');
});
userRouter.delete('/:id', (req, res, next) => {
const id = req.params.id;
res.json('删除某⼀个⽤户的数据:' + id);
});
userRouter.patch('/:id', (req, res, next) => {
const id = req.params.id;
res.json('修改某⼀个⽤户的数据:' + id);
});
// 导出路由器模块
module.exports = userRouter;