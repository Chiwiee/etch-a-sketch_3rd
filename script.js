let value = 16;
console.log(value);

for (let i = 1; i <= value * value; i++) {
  const container = document.querySelector("#grid-container");
  const grid = document.createElement("div");
  grid.classList = "grid";
  container.appendChild(grid);
}

const grid = document.querySelectorAll(".grid");
grid.forEach((grid) => {
  grid.addEventListener("mouseout", (e) => {
    e.target.style.background = "black";
  });
});

const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const mainContainer = document.querySelector("#main-container");
  const gridContainer = document.querySelector("#grid-container");
  mainContainer.removeChild(gridContainer);

  function getValue() {
    const input = prompt("Pick between: 32x32 or 64x64");
    if (input == 32) {
      return value * 2;
    } else if (input == 64) {
      return value * 4;
    }
  }
  const input = getValue();
});
