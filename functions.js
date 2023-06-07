export function clearInput() {
    inputFieldEl.value = ""
}

export function addToList(inputValue) {
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`
}