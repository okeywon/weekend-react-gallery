const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/photos/:id', (req, res) => {
    console.log('in router PUT', req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
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