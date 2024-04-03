const container = document.querySelector(".container");
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
    let div = document.createElement("div");
    div.classList.add("square");
    let squareSize = (960 / gridSize) + "px";
    div.style.width = squareSize;
    div.style.height = squareSize;
    container.appendChild(div);
  }
}

