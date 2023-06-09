import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// import { appendItemToShoppingListEl, clearInputFieldEl } from "./functions.js";

const appSettings = {
  databaseURL: "https://realtime-database-2789b-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);

  console.log(`${inputValue} added to database`);

  clearInputFieldEl();
});

onValue(shoppingListInDB, function (snapshot) {
  let itemsArray = Object.values(snapshot.val());

  clearShoppingListEl();

  for (let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i];
    appendItemToShoppingListEl(currentItem);
  }
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
