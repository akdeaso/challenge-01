const checkEmail = require("../soal3");

describe("tes email valid atau tidak", () => {
  describe("it should valid", () => {
    test("it should valid", () => {
      expect(checkEmail("akdeaso@gmail.com")).toBe("VALID");
    });
    test("it should valid", () => {
      expect(checkEmail("asdasd@gmail.co.id")).toBe("VALID");
    });
    test("it should valid", () => {
      expect(checkEmail("akdeas.19052@student.its.ac.id")).toBe("VALID");
    });
  });

  describe("it should be error", () => {
    test("it should error", () => {
      expect(checkEmail("apranata@binar")).toBe("Error: Format not match");
    });
    test("it should error", () => {
      expect(checkEmail("apranata")).toBe("Error: Format not match");
    });
    test("it should error", () => {
      expect(checkEmail("akdeaso@gmail.")).toBe("Error: Format not match");
    });
  });

  describe("cek parameter kosong", () => {
    test("it should error", () => {
      expect(checkEmail()).toBe("Error: Bro where is the parameter?");
    });
  });

  describe("tes tipe data parameter", () => {
    test("it should error", () => {
      expect(checkEmail(12313)).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(checkEmail({})).toBe("Error: Invalid data type");
    });
    test("it should error", () => {
      expect(checkEmail([])).toBe("Error: Invalid data type");
    });
  });
});
