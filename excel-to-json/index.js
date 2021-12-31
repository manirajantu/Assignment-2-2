// Setup package.json and install dependency "convert-excel-to-json" as a node module.

const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    source: fs.readFileSync(`${__dirname}/data.xlsx`) // fs.readFileSync return a Buffer
});

console.log(result);

