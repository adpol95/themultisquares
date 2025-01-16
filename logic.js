const container = document.getElementsByClassName("gameSide")[0];
const square = [...document.getElementsByClassName("square")];
const startButton = document.getElementsByClassName("startBtn")[0];
const winnerMessage = document.getElementsByClassName("winnerMessage")[0];
const loserMessage = document.getElementsByClassName("loserMessage")[0];
let targetSquares = square.sort(() => Math.random() - 0.5);
let playerIds = [];

const startingGame = () => {
  if (playerIds.length) {
    playerIds = [];
    targetSquares = square.sort(() => Math.random() - 0.5);

    square.forEach((sq) => {
      sq.disabled = false;
      sq.style.pointerEvents = "auto";
      sq.style.backgroundColor = "#FFBB98";
    });
  }

  startButton.disabled = true;
  startButton.style.pointerEvents = "none";
  startButton.style.backgroundColor = "#65a965";

  winnerMessage.style.display = "none";
  loserMessage.style.display = "none";

  setTimeout(() => {
    container.style.pointerEvents = "auto";
  }, 9000);

  targetSquares.forEach((el, i) => {
    const plusSecond = +(i + "000");

    setTimeout(() => {
      el.style.backgroundColor = "#f0fbff";
    }, 1000 + plusSecond);

    setTimeout(() => {
      el.style.backgroundColor = "#FFBB98";
    }, 1500 + plusSecond);
  });
};

const sendId = (event) => {
  const toggledSquare = document.getElementById(event.target.id);

  if (toggledSquare) {
    const processedId = event.target.id.replace(/\D/gi, "") - 1;

    toggledSquare.disabled = true;
    toggledSquare.style.pointerEvents = "none";

    if (
      targetSquares.indexOf(toggledSquare) !== playerIds.length ??
      playerIds.length - 1
    ) {
      loserMessage.style.display = "block";

      startButton.disabled = false;
      startButton.style.pointerEvents = "auto";
      startButton.style.backgroundColor = "#98FB98";

      toggledSquare.style.backgroundColor = "#fa4235";
    } else toggledSquare.style.backgroundColor = "#9ce49c";

    playerIds.push(processedId);
  }
};
