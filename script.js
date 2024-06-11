const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButton = document.querySelector(".number");
const operatorButton = document.querySelector(".operator");
const currentNumber = document.querySelector(".bottomrow");
const previousNumber = document.querySelector(".toprow");

numberButton.addEventListener("click", function (e) {
  numberButton(e.target.textContent);
});

console.log(numberButton);

function operate() {
  sum = 2 + 3;
}

console.log(operate);
