const XLSX = require("xlsx");
const compare = (listOne, listTwo) => {
  console.log(`length of list one is ${listOne.length}`);
  console.log(`length of list two is ${listTwo.length}`);
  const duplicates = listOne.filter(val => {
    return listTwo.indexOf(val) !== -1;
  });

  console.log(`length of duplicate list is ${duplicates.length}`);
  console.log(
    `length of list one minus duplicates is ${listOne.length -
      duplicates.length}`
  );
};

// console.log(workbook);

const getCols = (workbook, sheetName) => {
  let col1 = [];
  let col2 = [];
  XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]).forEach(row => {
    row.New ? col1.push(row.New) : null;
    row.Old ? col2.push(row.Old) : null;
  });

  console.log("Col1 is", col1);
  console.log("Col2 is", col2);

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
