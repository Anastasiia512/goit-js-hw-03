"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      type,
      amount
    };
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, "deposit"));
    this.balance += amount;
  },

  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, "withdraw"));
    if (amount > balance) {
      console.log("Снятие такой суммы не возможно, недостаточно средств.");
    }
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  }
};


