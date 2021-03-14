const fs = require('fs');

const data = fs.readFileSync("./files/exp.txt", "utf8");
console.log(data);