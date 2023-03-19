//Div Objects Board - module
const battlefield = (function () {
  let gameboard = document.getElementById("gameboard");
  for (let i = 1; i < 10; i++) {
    let div = document.createElement("div");
    div.classList.add("gameSquare");
    div.id = `square${i}`;
    gameboard.appendChild(div);
  }
})();

// eventlisteners and functions

let currentPlayer = {};
currentPlayer.marker = "Q";

const eventListener = (() => {
  let divs = document.getElementsByClassName("gameSquare");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      if (divs[i].firstChild) {
      } else {
        let p = document.createElement("p");
        p.innerText = currentPlayer.marker;
        p.classList.add("playersChoice");
        p.id="p"+[i]
        divs[i].appendChild(p);
        //every P should have and ID.
        //I should append the players swap here.
        //add a check for winning here also nums of ps go
        //from 0 to 8
      }
    });
  }

  //here you should add the form part

  return { divs };
})();

//Players Object Factory Function

function Player(name, marker) {
  let playerSquares = [];
  let winCount = [];
  let isHuman = true;
  return { marker, name, winCount, isHuman, playerSquares };
}

// handling form

// game controller (game steps)

const game = (() => {
  return {};
})();
