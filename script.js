const grid = 550;
const rows = null;
const columns = null;

const container = document.querySelector(".grid-container");
const changeBtn = document.querySelector("#changeBtn");

container.style.width = `${grid}px`;
container.style.height = `${grid}px`;


// FUNCTION TO CREATE A NEW GRID
const createGrid = (rows, columns) => {
  for (let i = 0; i < rows * columns; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${grid / columns - 2}px`;
    cell.style.height = `${grid / rows - 2}px`;
    cell.addEventListener("mouseover", mouseAction);
    container.appendChild(cell);
  }
};


// RGB COLOR FUNCTION/ACTION LISTENER
const mouseAction = (e) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = "#" + randomColor;
};



// NEW SKETCH
changeBtn.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  const size = prompt("Enter the grid size(max:100)");
  size <= 100 ? createGrid(size, size): null;
  
});
