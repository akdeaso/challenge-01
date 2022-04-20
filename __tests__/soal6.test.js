const getAngkaTerbesarKedua = require("../soal6");
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

describe("dapatkan angka terbesar kedua", () => {
  describe("should get angka terbesar kedua", () => {
    test("should get angka terbesar kedua ", () => {
      expect(getAngkaTerbesarKedua(dataAngka)).toBe(8);
    });
    test("should get angka terbesar kedua ", () => {
      expect(getAngkaTerbesarKedua([2, 6, 1, 4])).toBe(4);
    });
    test("should get angka terbesar kedua ", () => {
      expect(getAngkaTerbesarKedua([9, 3, 5, 1, 7, 2])).toBe(7);
    });
  });

  describe("tes parameter kosong", () => {
    test("it should error", () => {
      expect(getAngkaTerbesarKedua()).toBe(
        "Error: Bro where is the parameter?"
      );
    });
  });

  describe("tes tipe data parameter", () => {
    test("it should error", () => {
      expect(getAngkaTerbesarKedua(0)).toBe("Error: Invalid data type");
    });
    // test("it should error", () => {
    //   expect(getAngkaTerbesarKedua([])).toBe("Error: Invalid data type");
    // });
    // test("it should error", () => {
    //   expect(getAngkaTerbesarKedua({})).toBe("Error: Invalid data type");
    // });
  });
});
