document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    let vencendor = playerTime + 1;
    updateSquares();
    setTimeout(() => {
      alert(`Fim de Jogo, O Jogador ${vencendor} Venceu!`);
    }, 10);
  }
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    } else {
    }
  });
}
