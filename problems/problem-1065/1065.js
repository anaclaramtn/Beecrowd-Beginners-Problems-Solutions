var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value1 = lines.shift().trim();
value1 = Number(value1);
let value2 = lines.shift().trim();
value2 = Number(value2);
let value3 = lines.shift().trim();
value3 = Number(value3);
let value4 = lines.shift().trim();
value4 = Number(value4);
let value5 = lines.shift().trim();
value5 = Number(value5);

let counter = 0

if (value1 % 2 == 0) {
    counter += 1
}
if (value2 % 2 == 0) {
    counter += 1
}
if (value3 % 2 == 0) {
    counter += 1
}
if (value4 % 2 == 0) {
    counter += 1
}
if (value5 % 2 == 0) {
    counter += 1
}

console.log(`${counter} valores pares`)