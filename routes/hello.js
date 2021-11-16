var express = require("express")
var router = express.Router()
router.get("/", (request, res) => {
    console.log("request.url:", request.url);
    console.log("request.method:", request.method);
    console.log("request.headers:", request.headers);
    console.log('请求参数：', request.query)
    res.send("Hello World");
});
router.post('/', (req, res) => {
    res.send('Got a POST request')
})

module.exports = router