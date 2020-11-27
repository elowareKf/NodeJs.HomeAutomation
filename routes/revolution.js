const express = require('express');
const router = express.Router();
const fileReader = require('../services/fileReader');
const namesFile  = require("../services/namesFile");

router.get('/', function (req, res, next) {
    sendStatus(res);
}).patch('/', function (req, res, next) {
    const data = req.body;

    fileReader.setOutput(data.io, data.value).then(() => {
        sendStatus(res);
    });
}).post('/', function (req, res, next) {
    fileReader.switchAllOff().then(() => {
        sendStatus(res);
    });
}).put('/', function(req, res, next){
    try{
        const data = req.body;
        namesFile.updateName(data.io, data.description);
        res.sendStatus(201);
    }
    catch (e) {
        res.sendStatus(500);
        console.log(e.message);
    }
});

function sendStatus(res) {
    getStatus().then((data) => {
        res.json(data);
    });
}

async function getStatus() {
    return {
        names: namesFile.readNamesFile(),
        values: await fileReader.getOutputValues()
    }
}

function getOutputNames() {
    return [
        "Garage", "Einfahrt", "Lampe"
    ];
}

module.exports = router;
