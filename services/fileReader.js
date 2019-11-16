const fs = require('fs');

exports.readNamesFile = function () {
    const result = fs.readFileSync("names.txt", "utf8");
    let resultArray = result.split('\n');
    return resultArray.slice(0, resultArray.length - 1);
};

exports.getOutputValues = function () {
    var filePath = 'piControl0';
    let fileData = fs.readFileSync(filePath);

    let ios = [];
    for (let i = 0x50; i < 0x53; i++) {
        let byte = fileData[i];
        ios.push((byte & 0x01) != 0x00 ? true: false);
        ios.push((byte & 0x02) != 0x00 ? true: false);
        ios.push((byte & 0x04) != 0x00 ? true: false);
        ios.push((byte & 0x08) != 0x00 ? true: false);
        ios.push((byte & 0x10) != 0x00 ? true: false);
        ios.push((byte & 0x20) != 0x00 ? true: false);
        ios.push((byte & 0x40) != 0x00 ? true: false);
        ios.push((byte & 0x80) != 0x00 ? true: false);
    }
    return ios;
};
