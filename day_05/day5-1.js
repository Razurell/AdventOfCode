var fs = require('fs');
var initial_disposition = [
    ["R", "G", "J", "B", "T", "V", "Z"],
    ["J", "R", "V", "L"],
    ["F", "Q", "F"],
    ["Z", "H", "N", "L", "F", "V", "Q", "G"],
    ["R", "Q", "T", "J", "C", "S", "M", "W"],
    ["S", "W", "T", "C", "H", "F"],
    ["D", "Z", "C", "V", "F", "N", "J"],
    ["L", "G", "Z", "D", "W", "R", "F", "Q"],
    ["J", "B", "W", "V", "P"],
];
var input = fs.readFileSync('./data.txt', 'utf-8');
var lines = input.split('\n');
for (var i = 0; i < lines.length; i++) {
    var nb = parseInt(lines[i].split(" ")[1]);
    var from = parseInt(lines[i].split(" ")[3]);
    var to = parseInt(lines[i].split(" ")[5]);
    for (let y = 0; y < nb; y++) {
        initial_disposition[to-1].push(initial_disposition[from-1].pop())        
    }
    console.log(initial_disposition);
};