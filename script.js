let operator = "";
let previousValue = "";
let currentValue = "";

// html dom

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const currentNumber = document.querySelector(".bottomrow");
const previousNumber = document.querySelector(".toprow");

// number click to bottom display (current number)

numberButton.forEach((numberClick) =>
  numberClick.addEventListener("click", () => {
    appendNumber(numberClick.textContent);
    currentNumber.textContent = currentValue;
  })
);

// operator click to bottom display (current number)

operatorButton.forEach((operatorClick) =>
  operatorClick.addEventListener("click", () => {
    setOperation(operatorClick.textContent);
    previousNumber.textContent = previousValue + "" + operator;
    currentNumber.textContent = currentValue;
  })
);

function appendNumber(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

function setOperation(operator) {
  currentNumber.textContent = operator;
  previousValue = currentValue;
}

clearButton.addEventListener("click", () => {
  let operator = "";
  let previousValue = "";
  let currentValue = "";
  previousNumber.textContent = currentValue;
  currentNumber.textContent = currentValue;
});
