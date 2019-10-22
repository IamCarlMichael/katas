const printTable = require("./printTable.js");

class Account {
  constructor(balance) {
    this.balance = balance;
    this.statements = [];
    this.dateObject = new Date();
  }

  deposit(amount) {
    this.balance = this.balance + amount;
    let transaction = {
      Date: formattedDate(),
      Amount: `+${amount}`,
      Balance: this.balance
    };
    this.statements.push(transaction);
    return this.balance;
  }

  withdraw(amount) {
    this.balance = this.balance -= amount;

    let transaction = {
      Date: formattedDate(),
      Amount: `-${amount}`,
      Balance: this.balance
    };
    this.statements.push(transaction);
    return this.balance;
  }

  printStatement() {
    // console.table(this.statements);
    printTable(this.statements);
    return this.statements;
  }
}

function formattedDate(d = new Date()) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${day}.${month}.${year}`;
}

module.exports = Account;
