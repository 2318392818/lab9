const express = require('express');
const multer = require('multer');
// 创建app对象
const app = express();
// 配置Multer的存储选项，使⽤⾃定义的diskStorage引擎
const upload = multer({
storage: multer.diskStorage({
destination(req, file, callback) {
// 指定⽂件存放⽬录
callback(null, './uploads');
},
filename(req, file, callback) {
// 定义⽂件保存时的⽂件名, 使⽤当前时间戳+原始⽂件名
callback(null, Date.now() + '_' + file.originalname);
},
}),
});
// 单⽂件上传
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
console.log(req.file); // 打印单个上传⽂件的信息Lab10 Express的初步使⽤2 10
res.end('⽂件上传成功~');
});
// 多⽂件上传
app.post('/photos', upload.array('photos'), (req, res, next) => {
console.log(req.files); // 打印多个上传⽂件的信息
res.end('上传多张照⽚成功~');
});
// 启动服务器
app.listen(9000, () => {
console.log('express服务器启动成功~');
});