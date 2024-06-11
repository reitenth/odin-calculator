// html dom

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const currentNumber = document.querySelector(".bottomrow");
const previousNumber = document.querySelector(".toprow");

// number click to display

numberButton.forEach((numberClick) =>
  numberClick.addEventListener("click", () => {
    appendNumber(numberClick.textContent);
  })
);

function appendNumber(number) {
  currentNumber.textContent = number;
}

// operator click to display

operatorButton.forEach((operatorClick) =>
  operatorClick.addEventListener("click", () => {
    setOperation(operatorClick.textContent);
  })
);

function setOperation(operator) {
  currentNumber.textContent = operator;
}
