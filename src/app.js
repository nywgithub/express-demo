const express = require("express");
const app = express();
const port = 3003 // 默认3000
var indexRouter = require('../routes/index.js');
var helloRouter = require('../routes/hello.js');

// app.set("port", port)
//路由有多个子路由时，使用app.use()
app.use('/', helloRouter);
app.use('/todo', indexRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
