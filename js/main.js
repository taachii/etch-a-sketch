const clearButton = document.querySelector("#clear-button");
const colorPicker = document.querySelector("#color-picker");
const container = document.querySelector("div.container");
const slider = document.querySelector("#grid-size-slider");

const containerCompStyle = window.getComputedStyle(container)
const containerWidth = parseInt(containerCompStyle.getPropertyValue("width"));

let isMouseDown = false;
let squares; 
let gridSize;
let color;

init();
generateGrid();

function init() {
  setColor();
  setGridSize();

  slider.addEventListener("input", regenerateGrid);
  clearButton.addEventListener("click", clear);

  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  
  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  
  colorPicker.addEventListener("input", () => {
      setColor();
  });
}

function setColor() {
  color = colorPicker.value;
}

function setGridSize() {
  let sliderValue = slider.value;
  gridSize = sliderValue;
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
  squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mousemove", addColor);
  });
}

function regenerateGrid() {
  deleteAllSquares();
  setGridSize();
  generateGrid();
}

function deleteAllSquares() {
  const squareCount = container.childElementCount;
  for(let i = 0; i < squareCount; i++) {
    container.removeChild(container.lastChild);
  }
}

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