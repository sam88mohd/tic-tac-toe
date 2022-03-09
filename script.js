const outerBoxElement = document.querySelector(".outer-box");

function makeBox() {
  outerBoxElement.style.setProperty("--grid-rows", 3);
  outerBoxElement.style.setProperty("--grid-cols", 3);

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    outerBoxElement.appendChild(cell).className = "inner-box";
  }
}

makeBox();
