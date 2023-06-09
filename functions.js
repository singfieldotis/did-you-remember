export function clearInputFieldEl() {
  inputFieldEl.value = "";
}

export function appendItemToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
