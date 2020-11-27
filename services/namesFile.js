const fs = require('fs');

exports.updateName = function(id, description) {
    const names = readFile();
    for (let i = names.length; i <= id; i++){
        names.push("Item #"+i);
        i = i+1;
    }

    names[id] = description;

    fs.writeFileSync('names.txt', names, 'utf8');
};

function readFile(){
    const result = fs.readFileSync("names.txt", "utf8");
    let resultArray = result.split(',');
    return resultArray.slice(0, resultArray.length);
}

exports.readNamesFile = function() {
return readFile();
};
