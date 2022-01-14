const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")

function one() {
  first.textContent = "Namaste everyone"
}
function two() {
  second.textContent = "happy sagurati"
}
function three() {
  third.textContent = "enjoy the sagurati"
}

setTimeout(() => {
  one();
}, 1e3);

setTimeout(() => {
  two();
}, 2e3);
setTimeout(() => {
  three();
}, 3e3);