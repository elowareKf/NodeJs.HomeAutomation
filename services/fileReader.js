const fs = require('fs');
const BinaryFile = require('binary-file');

const filePath = 'piControl0';
const offset = 0x51;

exports.readNamesFile = function () {
    const result = fs.readFileSync("names.txt", "utf8");
    let resultArray = result.split('\n');
    return resultArray.slice(0, resultArray.length - 1);
};

exports.getOutputValues = async function () {
    const piControl0 = new BinaryFile(filePath, 'r');
    await piControl0.open();

    await piControl0.seek(offset);
    let ios = [];
    for (let i = 0; i < 4; i++) {
        let byte = await piControl0.readUInt8();
        ios.push((byte & 0x01) != 0x00 ? true : false);
        ios.push((byte & 0x02) != 0x00 ? true : false);
        ios.push((byte & 0x04) != 0x00 ? true : false);
        ios.push((byte & 0x08) != 0x00 ? true : false);
        ios.push((byte & 0x10) != 0x00 ? true : false);
        ios.push((byte & 0x20) != 0x00 ? true : false);
        ios.push((byte & 0x40) != 0x00 ? true : false);
        ios.push((byte & 0x80) != 0x00 ? true : false);
    }
    await piControl0.close();
    return ios;
};

async function getFileContent() {
    const piControl0 = new BinaryFile(filePath, 'r');
    await piControl0.open();
    const size = await piControl0.size();
    let buffer = await piControl0.read(20, offset);
    await piControl0.close();
    return buffer;
}

exports.switchAllOff = async function () {
    const content = await getFileContent();
    const piControl0 = new BinaryFile(filePath, 'w');
    await piControl0.open();
    await piControl0.seek(offset);

    for (let i = offset; i < offset + content.length; i++) {
        if (i < offset || i > offset + 4)
            await piControl0.writeUInt8(content[i]);
        else
            await piControl0.writeInt8(0x00);
    }
    await piControl0.close();
};

exports.setOutput = async function (io, value) {
    const content = await getFileContent();
    const piControl0 = new BinaryFile(filePath, 'w');
    await piControl0.open();
    await piControl0.seek(offset);

    const position = offset + Math.floor(io / 8);
    for (let i = offset; i < offset + content.length; i++) {
        if (i != position)
            await piControl0.writeUInt8(content[i-offset]);
        else {
            let byte = content[i-offset];
            if (value)
                byte = byte | (1 << (io % 8));
            else
                byte = byte & (0xFF ^ (1 << (io % 8)));
            await piControl0.writeUInt8(byte);
        }

    }
    await piControl0.close();


};
