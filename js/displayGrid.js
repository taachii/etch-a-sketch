const container = document.querySelector("div.container");
const slider = document.querySelector("#grid-size-slider");

const containerCompStyle = window.getComputedStyle(container)
const containerWidth = parseInt(containerCompStyle.getPropertyValue("width"));

let gridSize;

slider.addEventListener("input", regenerateGrid);

setGridSize();
generateGrid();

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

function regenerateGrid() {
  deleteAllSquares();
  setGridSize();
  generateGrid();
}

function setGridSize() {
  let sliderValue = slider.value;
  gridSize = sliderValue;
}

function deleteAllSquares() {
  const squareCount = container.childElementCount;
  for(let i = 0; i < squareCount; i++) {
    container.removeChild(container.lastChild);
  }
}
