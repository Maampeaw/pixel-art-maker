// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let width = parseInt(inputWidth.value);
  let height = parseInt(inputHeight.value);
  makeGrid(width, height, color.value);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height, color) {
  // Your code goes here!
  table.innerHTML = "";
  for (let index = 1; index <= height; index++) {
    let tr = document.createElement("tr");
    for (let index = 1; index <= width; index++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.addEventListener("click", (e) => {
        e.target.style.backgroundColor = color;
      });
    }
    table.appendChild(tr);
  }
}
