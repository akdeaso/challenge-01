const checkTypeNumber = require("../soal2");

describe("tes tipe bilangan ganjil/genap", () => {
  describe("it should be even", () => {
    test("it should be even", () => {
      expect(checkTypeNumber(2)).toBe("GENAP");
    });
    test("it should be even", () => {
      expect(checkTypeNumber(6)).toBe("GENAP");
    });
    test("it should be even", () => {
      expect(checkTypeNumber(1000)).toBe("GENAP");
    });
  });

  describe("it should be odd", () => {
    test("it should be odd", () => {
      expect(checkTypeNumber(3)).toBe("GANJIL");
    });
    test("it should be odd", () => {
      expect(checkTypeNumber(999)).toBe("GANJIL");
    });
    test("it should be odd", () => {
      expect(checkTypeNumber(6969)).toBe("GANJIL");
    });
  });

  describe("Validasi parameter kosong", () => {
    test("it should error", () => {
      expect(checkTypeNumber()).toBe("Error: Bro where is the parameter?");
    });
  });

  describe("Validasi tipe data parameter", () => {
    test("it should error", () => {
      expect(checkTypeNumber({})).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(checkTypeNumber("2")).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(checkTypeNumber([])).toBe("Error: Invalid data type");
    });
  });
});
