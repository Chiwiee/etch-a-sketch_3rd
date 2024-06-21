for (let i = 1; i <= 16 * 16; i++) {
  const container = document.querySelector("#grid-container");
  const grid = document.createElement("div");
  grid.classList = "grid";
  container.appendChild(grid);
}

const grid = document.querySelector("#grid");
grid.forEach((grid) => {});
