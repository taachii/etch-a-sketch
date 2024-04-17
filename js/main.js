const container = document.querySelector("div.container");
const slider = document.querySelector("#grid-size-slider");
const colorPicker = document.querySelector("#color-picker");
const clearButton = document.querySelector("#clear-button");
const eraserButton = document.querySelector("#eraser-button");
const rainbowButton = document.querySelector("#rainbow-button");
const darkeningButton = document.querySelector("#darkening-button");

const containerCompStyle = window.getComputedStyle(container)
const containerWidth = parseInt(containerCompStyle.getPropertyValue("width"));

let isMouseDown = false;
let isRainbow = false;
let isDarkening = false;
let squares; 
let gridSize;
let color;

init();
generateGrid();

function init() {
  setColor();
  setGridSize();
  addEventListeners();
}

function setColor() {
  color = colorPicker.value;
}

function setGridSize() {
  let sliderValue = slider.value;
  gridSize = sliderValue;
}

function addEventListeners() {
  clearButton.addEventListener("click", clear);
  eraserButton.addEventListener("click", () => {
    isRainbow = false;
    color = "white";
  });

  rainbowButton.addEventListener("click", () => {
    isDarkening = false;
    isRainbow = true;
  });

  darkeningButton.addEventListener("click", () => {
    isRainbow = false;
    isDarkening = true;
  });

  slider.addEventListener("input", regenerateGrid);

  slider.addEventListener("mousedown", () => {
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });

  container.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  container.addEventListener("mouseover", () => {
    container.style.cursor = "crosshair";
  });

  colorPicker.addEventListener("input", () => {
    setColor();
  });
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
    square.addEventListener("mouseover", addColor);
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
    if(isRainbow){
      color = generateRandomColor();
    }
    
    if(isDarkening) {
      let currentColor = e.target.style.backgroundColor || "rgb(255,255,255)";
      let rgb = currentColor.match(/\d+/g);
      let newColor = 'rgb(' + (parseInt(rgb[0]) - 20) + ',' + (parseInt(rgb[1]) - 20) + ',' + (parseInt(rgb[2]) - 20) + ')';
      color = newColor;
    }

    e.target.style.background = color;
  }
}

function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function clear() {
  squares.forEach(square => {
    square.style.background = "white";
  })
}