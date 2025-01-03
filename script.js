// script.js

// Initial balance
let balance = 1000;

function checkBalance() {
  document.getElementById("message").innerText = `Your current balance is $${balance}`;
}

function depositMoney() {
  const amount = parseFloat(prompt("Enter amount to deposit:"));
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    document.getElementById("message").innerText = `Successfully deposited $${amount}. Your new balance is $${balance}`;
  } else {
    document.getElementById("message").innerText = "Invalid amount. Please try again.";
  }
}

function withdrawMoney() {
  const amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      document.getElementById("message").innerText = `Successfully withdrew $${amount}. Your new balance is $${balance}`;
    } else {
      document.getElementById("message").innerText = "Insufficient balance.";
    }
  } else {
    document.getElementById("message").innerText = "Invalid amount. Please try again.";
  }
}

function exitATM() {
  document.getElementById("message").innerText = "Thank you for using the ATM. Goodbye!";
}
