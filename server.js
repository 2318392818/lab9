const express = require('express');
// 创建app对象
const app = express();
// 使⽤内置的中间件将⽂件夹做为静态资源
// 此设置使得`uploads`⽬录和`build`⽬录中的⽂件可以被客户端直接访问
app.use(express.static('./uploads'));
app.use(express.static('./build'));
// ⽰例路由中间件
app.post('/login', (req, res, next) => {
 // 登录逻辑
});
// 启动服务器
app.listen(9000, () => {
 console.log('express服务器启动成功~');
});