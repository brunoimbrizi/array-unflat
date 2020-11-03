const unflat = require('./index.js');

const arr = [0.2, 0.3, 0.5, -1.8, 2.9, 1.1];
console.log(unflat(arr));
console.log(unflat(arr, 3));
