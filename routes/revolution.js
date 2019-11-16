const express = require('express');
const router = express.Router();
const fileReader = require('../services/fileReader');

router.get('/', function (req, res, next) {
    res.json(getStatus());
}).post('/', function (req, res, next) {
    res.json({value: 3});
});

function getStatus() {
    return {
        names: fileReader.readNamesFile(),
        values: fileReader.getOutputValues()
    }
}

function getOutputNames() {
    return [
        "Garage", "Einfahrt", "Lampe"
    ];
}

module.exports = router;
