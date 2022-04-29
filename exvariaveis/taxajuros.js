let M = 90000;
let C = 60000;
let n = 24;
let i = ((((M/C) ** (1/n)) - 1) * 100).toFixed(3);
console.log(i);