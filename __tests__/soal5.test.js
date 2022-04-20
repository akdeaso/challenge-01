const getSplitName = require("../soal5");

describe("tes pemisah kalimat", () => {
  describe("it should splitted", () => {
    test("it should splitted", () => {
      expect(getSplitName("Aldi Daniela Pranata")).toStrictEqual({
        firstName: "Aldi",
        middleName: "Daniela",
        lastName: "Pranata",
      });
    });
    test("it should splitted", () => {
      expect(getSplitName("Dwi Kuncoro")).toStrictEqual({
        firstName: "Dwi",
        middleName: null,
        lastName: "Kuncoro",
      });
    });
    test("it should splitted", () => {
      expect(getSplitName("Aurora")).toStrictEqual({
        firstName: "Aurora",
        middleName: null,
        lastName: null,
      });
    });
  });

  describe("it should error", () => {
    test("it should error", () => {
      expect(getSplitName("Aurora Aureliya Sukma Darma")).toBe(
        "Error: This function is only for 3 characters name"
      );
    });
    test("it should error", () => {
      expect(getSplitName("Aurora Aureliya Sukma Darma Wanita")).toBe(
        "Error: This function is only for 3 characters name"
      );
    });
    test("it should error", () => {
      expect(getSplitName("I Gede Wahyu Sultan Agung")).toBe(
        "Error: This function is only for 3 characters name"
      );
    });
  });

  describe("tes tipe data parameter", () => {
    test("it should error", () => {
      expect(getSplitName(0)).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(getSplitName([])).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(getSplitName({})).toBe("Error: Invalid data type");
    });
  });
});
