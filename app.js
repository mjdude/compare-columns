const XLSX = require("xlsx");
const { compare, getCols } = require("./lib");
const fileName = "compare.xlsx";
const workbook = XLSX.readFile(fileName);
const sheetName = "Sheet1";

const cols = getCols(workbook, sheetName);
compare(cols.col1, cols.col2);
