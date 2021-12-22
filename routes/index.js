var express = require("express")
var router = express.Router()
const fs = require('fs');
const { getDb } = require("../db/db");

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


router.get("/:id", async(req, res) => {
    try {
        const db = await getDb();
        console.log(db)
        const todo = db.todos.find((todo) => todo.id === +req.params.id);
        if (!todo) {
            return res.status(404).end();
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }

});


module.exports = router