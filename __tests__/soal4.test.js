const isValidPassword = require("../soal4");

describe("tes password valid atau tidak", () => {
  describe("it should valid", () => {
    test("it should valid", () => {
      expect(isValidPassword("Meong2021")).toBe(true);
    });
    test("it should valid", () => {
      expect(isValidPassword("Goku1998")).toBe(true);
    });
    test("it should valid", () => {
      expect(isValidPassword("kaliJaga212")).toBe(true);
    });
  });

  describe("it should invalid", () => {
    test("it should invalid", () => {
      expect(isValidPassword("123123")).toBe(false);
    });
    test("it should valid", () => {
      expect(isValidPassword("inipasswordkuat")).toBe(false);
    });
    test("it should valid", () => {
      expect(isValidPassword("penjahat500")).toBe(false);
    });
  });

  describe("tes parameter kosong", () => {
    test("it should error", () => {
      expect(isValidPassword()).toBe("Error: Bro where is the parameter?");
    });
  });

  describe("tes tipe data parameter", () => {
    test("it should error", () => {
      expect(isValidPassword(3123123)).toBe("Error: Invalid data type");
    });
    test("it should valid", () => {
      expect(isValidPassword({})).toBe("Error: Invalid data type");
    });
    test("it should valid", () => {
      expect(isValidPassword([])).toBe("Error: Invalid data type");
    });
  });
});
