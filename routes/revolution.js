const express = require('express');
const router = express.Router();
const fileReader = require('../services/fileReader');

router.get('/', function (req, res, next) {
    sendStatus(res);
}).put('/', function (req, res, next) {
    const data = req.body;

    fileReader.setOutput(data.io, data.value).then(() => {
        sendStatus(res);
    });
}).post('/', function (req, res, next) {
    fileReader.switchAllOff().then(() => {
        sendStatus(res);
    });
});

function sendStatus(res) {
    getStatus().then((data) => {
        res.json(data);
    });
}

async function getStatus() {
    return {
        names: fileReader.readNamesFile(),
        values: await fileReader.getOutputValues()
    }
}

function getOutputNames() {
    return [
        "Garage", "Einfahrt", "Lampe"
    ];
}

module.exports = router;
