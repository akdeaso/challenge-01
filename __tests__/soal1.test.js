const changeWord = require("../soal1");

describe("test penggantian kata", () => {
  test("it should replaced", () => {
    expect(
      changeWord(
        "mencintai",
        "membenci",
        "Andini sangat mencintai kamu selamanya"
      )
    ).toBe("Andini sangat membenci kamu selamanya");
  });
  test("it should replaced", () => {
    expect(
      changeWord(
        "bromo",
        "semeru",
        "Gunung bromo tak akan mampu menggambarkan cintaku padamu"
      )
    ).toBe("Gunung semeru tak akan mampu menggambarkan cintaku padamu");
  });
  test("it should replaced", () => {
    expect(changeWord("siang", "malam", "makan siang di dapur")).toBe(
      "makan malam di dapur"
    );
  });
});
