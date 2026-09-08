const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const dateInput = document.getElementById("dateInput");
const expenseSubmit = document.getElementById("expenseSubmit");
const total = document.getElementById("total");
const amountHistory = document.getElementById("amountHistory");
const categoryHistory = document.getElementById("categoryHistory");
const dateHistory = document.getElementById("dateHistory");
const actionHistory = document.getElementById("actionHistory");

function showGreeting(name) {
    greeting.textContent = `Hi, ${name}. Let's input your expense todaaay ^^`;
}

nameForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = nameInput.value.trim();

    if (!name) {
        greeting.textContent = "Please enter your name";
        return;
    }

    showGreeting(name);

    nameInput.value = "";
});

let totalExpense = 0;

function addExpense(amount) {
    totalExpense += amount;
    total.textContent = `Total: ${totalExpense}`;
}

expenseSubmit.addEventListener("click", function () {
    let amount = Number(amountInput.value);
    let category = categoryInput.value;
    let date = dateInput.value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (!category) {
        alert("Please choose a category");
        return;
    }

    if (!date) {
        alert("Please choose a date");
        return;
    }

    addExpense(amount);
    addHistory(amount, category, date);

    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
});

function addHistory(amount, category, date) {
    let amountItem = document.createElement("p");
    amountItem.textContent = amount;

    let categoryItem = document.createElement("p");
    categoryItem.textContent = category;

    let dateItem = document.createElement("p");

    let dateParts = date.split("-");
    dateItem.textContent = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

    let actionItem = document.createElement("p");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        totalExpense -= amount;
        total.textContent = `Total: ${totalExpense}`;

        amountItem.remove();
        categoryItem.remove();
        dateItem.remove();
        actionItem.remove();
    });

    actionItem.appendChild(deleteButton);

    amountHistory.appendChild(amountItem);
    categoryHistory.appendChild(categoryItem);
    dateHistory.appendChild(dateItem);
    actionHistory.appendChild(actionItem);
}