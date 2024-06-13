let operator = "";
let previousValue = "";
let currentValue = "";

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const currentScreen = document.querySelector(".bottomrow");
const previousScreen = document.querySelector(".toprow");

numberButton.forEach((numberClick) =>
  numberClick.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

operatorButton.forEach((operatorClick) =>
  operatorClick.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

function handleNumber(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

function handleOperator(operatorClick) {
  operator = operatorClick;
  previousValue = currentValue;
  currentValue = "";
}

clearButton.addEventListener("click", () => {
  operator = "";
  previousValue = "";
  currentValue = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

deleteButton.addEventListener("click", function deleteNumber() {
  currentScreen.textContent = currentScreen.textContent.slice(0, -1);
  currentValue = currentScreen.textContent;
  console.log(currentValue);
});

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }
  console.log(previousValue);
}
