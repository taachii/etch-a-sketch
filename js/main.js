const squares = document.querySelectorAll(".square");
const clearButton = document.querySelector("#clear-button");

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