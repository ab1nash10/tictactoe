console.log("Welcome to tic tac toe");
let music = new Audio("./assets/music.mp3");
let turn = new Audio("./assets/ting.mp3");
let gameOver = new Audio("./assets/gameover.mp3");
let isEnd = false;
let turnVar = "X";

//* this function is for changing the turn
const changeTurn = () => {
  return turnVar === "X" ? "0" : "X";
};

//* this function will check if someone won or not

const checkWin = () => {
  let boxContent = document.getElementsByClassName("box-Content");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxContent[e[0]].innerText === boxContent[e[1]].innerText &&
      boxContent[e[2]].innerText === boxContent[e[1]].innerText &&
      boxContent[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxContent[e[0]].innerText + " Won ";
      isEnd = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "10rem";
      console.log(`winner is ${boxContent[e[0]].innerText}`);
      winnerDec();
    }
  });
};
//logic
const winnerDec = () => {
  if (isEnd) {
    let boxes = document.getElementsByClassName(".box");
    let arr = Array.from(boxes);
    arr.forEach((item) => {
      let boxContent = item.querySelector(".box-Content");
      console.log(item);
      boxContent.addEventListener("click", function (e) {
        if (boxContent.innerText === "") {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });
  }
};

let boxes = document.getElementsByClassName("box");
let arr = Array.from(boxes);
arr.forEach((item) => {
  let boxContent = item.querySelector(".box-Content");
  item.addEventListener("click", function () {
    if (boxContent.innerText === "") {
      boxContent.innerText = turnVar;
      turnVar = changeTurn();
      turn.play();
      checkWin();
      if (!isEnd) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turnVar;
      }
    }
  });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  let boxContent = document.querySelectorAll(".box-Content");
  Array.from(boxContent).forEach((item) => {
    item.innerText = "";
    isEnd = false;
    turnVar = "X";
    document.getElementsByClassName("info")[0].innerText =
      "Turn for " + turnVar;
    document
      .querySelector(".imgBox")
      .getElementsByTagName("img")[0].style.width = "0";
  });
});
