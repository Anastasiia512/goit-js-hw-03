"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id,
      type,
      amount
    };
    return transaction;
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, "deposit"));
  },

  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, "deposit"));
    if (amount > balance) {
      console.log("Снятие такой суммы не возможно, недостаточно средств.");
    }
  },

  getBalance(transactions) {
    for (this.transaction of this.transactions) {
      balance += this.transaction.amount;
    }
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      this.transaction = this.transactions[i];
      if (this.transaction.id === id) {
        return this.transaction.amount;
      }
    }
  },

  getTransactionTotal(type) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      this.transaction = this.transactions[i];
      if (this.transaction.type === type) {
        return (balance += amount);
      }
    }
  }

};

console.log(account);