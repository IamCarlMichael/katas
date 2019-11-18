const CoinExchange = require("./CoinExchange");

describe("Coin Exchange", () => {
  xit("should return 1 when amount is 4 and cointypes are [1]", () => {
    expect(CoinExchange(4, [1])).toBe(1);
  });
  it("should return 4 when amount is 4 and cointypes are [1,2,3]", () => {
    expect(CoinExchange(3, [1, 2, 3, 4, 5])).toBe(3);
  });
  //   it("should return 5 when amount is 10 and cointypes are [2,5,3,6]", () => {
  //     expect(CoinExchange(4, [1, 2, 3])).toBe(4);
  //   });
});
