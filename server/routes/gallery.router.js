const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/likes/:id', (req, res) => {
    pool.query(`
        UPDATE photos
        SET number = number + 1
        WHERE id = $1;
    `, [req.params.id])
        .then(dbRes => {
            res.sendStatus(204);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM photos ORDER BY id;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error on router side GET', err);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;