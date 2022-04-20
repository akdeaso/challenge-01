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

//soal 3
const checkEmail = (email) => {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (email === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof email !== "string") {
    return "Error: Invalid data type";
  } else if (!regex.test(email)) {
    return "Error: Format not match";
  } else if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());

module.exports = checkEmail;
