// displayController module
const displayController = (function () {
  // get outer-box element
  const outerBoxElement = document.querySelector(".outer-box");

  // create new 3 x 3 board
  const newBoard = () => {
    outerBoxElement.style.setProperty("--grid-rows", 3);
    outerBoxElement.style.setProperty("--grid-cols", 3);

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("inner-box");
      cell.setAttribute("data-id", i);
      outerBoxElement.appendChild(cell);
    }
  };

  // write marker to board
  const write = (marker) => {
    outerBoxElement.addEventListener("click", (e) => {
      e.target.textContent = marker;
    });
  };

  return { newBoard, write };
})();

// Gameboard object
const GameBoard = (() => {
  let array = [];
})();

// Player object
const Player = (marker) => {
  const getMarker = () => marker;
  return { getMarker };
};

displayController.newBoard();
displayController.write("X");

const player1 = Player("X");
const player2 = Player("0");
