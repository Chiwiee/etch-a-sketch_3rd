let defaultValue = 16;

for (let i = 1; i <= defaultValue * defaultValue; i++) {
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

function getValue() {
  const input = prompt("Pick between: 32x32 or 64x64");
  if (input == 32) {
    return input * 2;
  }
}
const button = document.querySelector("#button");
button.addEventListener("click", () => {});
