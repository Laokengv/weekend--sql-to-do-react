const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log("In GET request");
    let query = `
    SELECT * FROM "tasks";
    `;

    pool.query(query)
    .then((result) => res.send(result.rows))
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});
// POST
router.post('/', (req, res) => {
    const {task, status} = req.body;
    console.log(req.body);
    const query = `
    INSERT INTO "tasks" ("task", "details", "status")
    VALUES ($1, $3, false);
    `;
    pool.query(query, [task, status, details])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error ${query}`, error);
        res.sendStatus(500);
    })
})
// PUT
router.put('/:id', (req, res) => {
    let taskId = req.params.id;
    let { task, status, details } = req.body; 
    let sqlText = '';
    sqlText = `UPDATE "tasks" 
    SET "task" = $1, "status" = $2, details = $3
    WHERE id = $4;`;

    pool.query(sqlText, [task, status, details, taskId])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});
// DELETE
router.delete('/:id', (req, res) => {
    let deleteTask = req.params.id;
    console.log('Delete task', deleteTask);
    let sqlText = `DELETE FROM "tasks" WHERE id=${deleteTask}`;
    pool.query(sqlText)
    .then(() => {
        console.log('Task deleted');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error with DELETE request ${sqlText}`, error);
        res.sendStatus(500);
    })
})
module.exports = router;
