const container = document.querySelector("div.container");
const containerCompStyle = window.getComputedStyle(container)
const containerWidth = parseInt(containerCompStyle.getPropertyValue("width"));

console.log(containerWidth);
let gridSize;

setGridSize();
generateGrid();

function setGridSize() {
  while (true) {
    gridSize = parseInt(prompt("Enter grid size (16 - 100): "));
    if (gridSize >= 16 && gridSize <= 100) {
      break;
    }
    alert("Wrong grid size!");
  }
}

function generateGrid() {
  for(let i = 0; i < gridSize**2; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    const squareSize = (containerWidth / gridSize) + "px";
    div.style.width = squareSize;
    div.style.height = squareSize;
    container.appendChild(div);
  }
}