const fs = require('fs');

exports.readNamesFile = function () {
    const result = fs.readFileSync("names.txt", "utf8");
    let resultArray = result.split('\n');
    return resultArray.slice(0, resultArray.length - 1);
};

exports.getOutputValues = async function ()  {
    var handler = await fs.open('piControl0', 'r');

}
