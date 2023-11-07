var fs = require('fs');

var input = fs.readFileSync('./data.txt', 'utf-8');
for (var i = 3; i < input.length; i++) {
    var char1 = input[i-3];
    var char2 = input[i-2];
    var char3 = input[i-1];
    var char4 = input[i];
    console.log(char1, char2, char3, char4);
    if (char1 !== char2 && char1 !== char3 && char1 !== char4 
    && char2 !== char3 && char2!== char4 && char3!== char4) {
        console.log(i+1);
        return;
    }
}