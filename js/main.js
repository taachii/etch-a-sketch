const squares = document.querySelectorAll(".square");
const clearButton = document.querySelector("#clear-button");
const colorPicker = document.querySelector("#color-picker");

let isMouseDown = false;
let color = "blue";

container.addEventListener("mousedown", () => {
  isMouseDown = true;
});

container.addEventListener("mouseup", () => {
  isMouseDown = false;
});

squares.forEach(square => {
  square.addEventListener("mousemove", addColor)
});

colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
});

clearButton.addEventListener("click", clear);

function addColor(e) {
  if(isMouseDown) {
    e.target.style.background = color;
  }
}

function clear() {
  squares.forEach(square => {
    square.style.background = "white";
  })
}