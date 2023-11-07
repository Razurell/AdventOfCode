var fs = require('fs');

var input = fs.readFileSync('./data.txt', 'utf-8');
for (var i = 13; i < input.length; i++) {
    let bool = false;
    for (let y = 0; y < 14; y++) {
        for (let x = y+1; x < 14; x++) {
            if (input[y + i - 13] === input[x + i - 13])
                bool = true;
        }
    }
    if (bool === false) {
        console.log(i+1);
        console.log(input.substring(i-13, i));
        return;
    }
}