const Account = require("./bankingKata.js");

describe("Banking Kata", () => {
  const Tom = new Account(0);
  it("should show 50 when Tom deposit $50 in the account ", () => {
    expect(Tom.deposit(500)).toBe(500);
  });

  it("should show 0 when Tom withdraw $50 in the account ", () => {
    expect(Tom.withdraw(100)).toBe(400);
  });

  it("should have a transaction record of the amount Tom deposited of 500 and the balance 500 ", () => {
    expect(Tom.printStatement()).toContainEqual({
      Amount: "+500",
      Balance: 500,
      Date: "22.10.2019"
    });
  });

  it("should have a transaction record of the amount Tom withdrew of 100 and the balance 400 ", () => {
    expect(Tom.printStatement()).toContainEqual({
      Amount: "-100",
      Balance: 400,
      Date: "22.10.2019"
    });
  });
});
