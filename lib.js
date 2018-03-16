const XLSX = require("xlsx");
const _ = require("underscore");

const compare = (listOne, listTwo) => {
  const intersection = _.intersection(listOne, listTwo);
  console.log(`List 1 and List 2 share ${intersection.length} elements`);

  const difference = _.difference(listOne, listTwo);
  console.log(`List 1 contains ${difference.length} not in List 2`);

  console.log(`Elements that are the same are:`);
  console.log(intersection);
  ``;
};

const getCols = (workbook, sheetName) => {
  let col1 = [];
  let col2 = [];
  XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]).forEach(row => {
    row.New ? col1.push(row.New) : null;
    row.Old ? col2.push(row.Old) : null;
  });

  return { col1, col2 };
};

const isUnique = links => {
  const nonUnique = links.filter((val, index, self) => {
    return self.indexOf(val) !== index;
  });

  console.log("Non unique contains " + nonUnique);
  return nonUnique.length ? false : true;
};

module.exports = {
  compare,
  getCols
};
