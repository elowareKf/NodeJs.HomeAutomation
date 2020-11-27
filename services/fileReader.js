const fs = require('fs');
const BinaryFile = require('binary-file');

const filePath = 'piControl0';
const offset_block_1 = 0x51;
const offset_block_2 = 0xC2;
const pwmOffset = 0x53;


exports.getOutputValues = async function () {
    const piControl0 = new BinaryFile(filePath, 'r');
    await piControl0.open();

    await piControl0.seek(offset_block_1);
    let ios = await decodeBytes(piControl0);

    await piControl0.seek(offset_block_2);
    ios = ios.concat(await decodeBytes(piControl0));

    await piControl0.close();
    return ios;
};

async function decodeBytes(file) {
    let ios = [];
    for (let i = 0; i < 2; i++) {
        let byte = await file.readUInt8();
        ios.push((byte & 0x01) != 0x00 ? 100 : 0);
        ios.push((byte & 0x02) != 0x00 ? 100 : 0);
        ios.push((byte & 0x04) != 0x00 ? 100 : 0);
        ios.push((byte & 0x08) != 0x00 ? 100 : 0);
        ios.push((byte & 0x10) != 0x00 ? 100 : 0);
        ios.push((byte & 0x20) != 0x00 ? 100 : 0);
        ios.push((byte & 0x40) != 0x00 ? 100 : 0);
        ios.push((byte & 0x80) != 0x00 ? 100 : 0);
    }
    return ios;
}

async function getFileContent() {
    const piControl0 = new BinaryFile(filePath, 'r');
    await piControl0.open();

    let result1 = await piControl0.read(2, offset_block_1);
    let result2 = await piControl0.read(2, offset_block_2);
    await piControl0.close();

    return [result1[0], result1[1], result2[0], result2[1] ]
}

exports.switchAllOff = async function () {
    const content = await getFileContent();
    const piControl0 = new BinaryFile(filePath, 'w');
    await piControl0.open();
    await piControl0.seek(offset_block_1);

    for (let i = offset_block_1; i < offset_block_1 + content.length; i++) {
        await piControl0.writeUInt8(0x00);
    }
    await piControl0.close();
};

exports.setOutput = async function (io, value) {
    const content = await getFileContent();
    const piControl0 = new BinaryFile(filePath, 'w');
    await piControl0.open();

    var offset = io < 16 ? offset_block_1 : offset_block_2;

    if ((io >=8  && io < 16) || io >= 24)
        offset = offset + 1;

    await piControl0.seek(offset);

    let byte = content[Math.floor(io / 8)];
    if (value > 0)
        byte = byte | (1 << (io % 8));
    else
        byte = byte & (0xFF ^ (1 << (io % 8)));
    await piControl0.writeUInt8(byte);
    await piControl0.close();


};
