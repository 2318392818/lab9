const express = require('express');
const multer = require('multer');
// 创建app对象
const app = express();
// 应⽤⼀个express编写的第三⽅中间件
// 初始化multer，并指定上传⽂件存放的⽬录
const upload = multer({ dest: './uploads' });
// 编写中间件
// 上传单⽂件: 使⽤multer的single⽅法，处理名为'avatar'的⽂件
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
console.log(req.file); // 打印上传的⽂件信息，例如路径、⼤⼩等
res.end('⽂件上传成功~');
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});