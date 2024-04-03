const squares = document.querySelectorAll(".square");
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

function addColor(e) {
  if(isMouseDown) {
    e.target.style.background = color;
  }
}