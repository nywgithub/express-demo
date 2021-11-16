var express = require("express")
var router = express.Router()
const fs = require('fs');

router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }
        const db = JSON.parse(data);
        res.status(200).json(db.todos);
    });
});


router.get("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }
        const db = JSON.parse(data);
        // console.log(typeof req.params.id) // string
        const todo = db.todos.find((todo) => todo.id === +req.params.id);
        if (!todo) {
            return res.status(404).end();
        }
        res.status(200).json(todo);
    });
});


module.exports = router