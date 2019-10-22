const sumOfABeach = require("./sumOfABeach.js");

describe("beachFunction", () => {
  it("should return 1", () => {
    expect(sumOfABeach("sand")).toBe(1);
  });
  it("should return 1", () => {
    expect(sumOfABeach("saNd")).toBe(1);
  });
  it("should return 2", () => {
    expect(sumOfABeach("saNdxxxxSand")).toBe(2);
  });
  it("should return 1", () => {
    expect(sumOfABeach("WAtErSlIde")).toBe(1);
  });
  it("should return 1", () => {
    expect(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")).toBe(3);
  });
  it("should return 1", () => {
    expect(sumOfABeach("gOfIshsunesunFiSh")).toBe(4);
  });
  it("should return 1", () => {
    expect(sumOfABeach("cItYTowNcARShoW")).toBe(0);
  });
});
