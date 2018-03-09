const listOne = [];

const listTwo = [];

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

const isUnique = links => {
  const nonUnique = links.filter((val, index, self) => {
    return self.indexOf(val) !== index;
  });

  console.log("Non unique contains " + nonUnique);
  return nonUnique.length ? false : true;
};

compare(listOne, listTwo);
isUnique(listOne);
