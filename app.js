const XLSX = require("xlsx");
const fileName = "compare.xlsx";
const workbook = XLSX.readFile(fileName);

console.log(workbook);
