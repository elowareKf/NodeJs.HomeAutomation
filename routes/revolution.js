const express = require('express');
const router = express.Router();
const fileReader = require('../services/fileReader');

router.get('/', function (req, res, next) {
    res.json(getOutputValues());
}).post('/', function (req, res, next) {
    res.json({value: 3});
});

function getOutputValues() {
    return {
        names: fileReader.readNamesFile(),
        values: [false, false, true]
    }
}

function getOutputNames() {
    return [
        "Garage", "Einfahrt", "Lampe"
    ];
}

module.exports = router;
