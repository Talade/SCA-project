const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equals = document.getElementsByClassName("equals")[0];
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const history = document.getElementById("history");
const backspace = document.getElementById("backspace");

number.forEach((btn) => btn.addEventListener("click", addNumber));

function addNumber(e) {
  e.preventDefault();

  history.innerText += e.target.id;
  display.innerText += e.target.id;
}

operator.forEach((btn) => btn.addEventListener("click", addOperator));

function addOperator(e) {
  e.preventDefault();

  history.innerText += e.target.id;
  display.innerText += e.target.id;
}

equals.addEventListener("click", computeResult);

function computeResult(e) {
  e.preventDefault();

    display.innerText = eval(display.innerText);
    

}

clear.addEventListener("click", clearResult);

function clearResult(e) {
  e.preventDefault();

  history.innerText = "";
  display.innerText = "";
}

backspace.addEventListener("click", removeNumber);

function removeNumber(e) {
  e.preventDefault();

  history.innerText = display.innerText.slice(0, -1);
  display.innerText = display.innerText.slice(0, -1);
}
