//soal 6
const getAngkaTerbesarKedua = (angka) => {
  if (angka === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof angka !== "object") {
    return "Error: Invalid data type";
  } else {
    let angkaUnik = [
      ...new Set(
        angka
          .sort((a, b) => {
            return a - b;
          })
          .reverse()
      ),
    ];
    return angkaUnik[1];
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

module.exports = getAngkaTerbesarKedua;
