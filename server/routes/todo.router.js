const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log("In GET request");
    let query = 'SELECT * FROM "toDoApp";';

    pool.query(query).then((result) => {
        res.send(result.rows);
    }) .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});
// POST
router.post('/', (req, res) => {
    const {task, taskCompleted} = req.body;
    console.log(req.body);
    const query = `
    INSERT INTO "toDoApp" ("task", "taskCompleted")
    VALUES ($1, $2);
    `;
    pool.query(query, [task, taskCompleted])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error ${query}`, error);
        res.sendStatus(500);
    })
})
// PUT

// DELETE

module.exports = router;
