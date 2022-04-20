//soal 4
const isValidPassword = (password) => {
  let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  if (password === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof password !== "string") {
    return "Error: Invalid data type";
  } else if (regex.test(password)) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());

module.exports = isValidPassword;
