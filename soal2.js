//soal 2
const checkTypeNumber = (givenNumber) => {
  if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else if (givenNumber % 2 !== 0) {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

module.exports = checkTypeNumber;
