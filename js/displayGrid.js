const container = document.querySelector("div.container");
const slider = document.querySelector("#grid-size-slider");

const containerCompStyle = window.getComputedStyle(container)
const containerWidth = parseInt(containerCompStyle.getPropertyValue("width"));

let gridSize;

slider.addEventListener("input", setGridSize);

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

function setGridSize() {
  let sliderValue = slider.value;
  gridSize = sliderValue;
}
