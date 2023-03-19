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

const eventListener=(()=>{
    let divs=getElementsByclassName('gameSquare')
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

const game=(()=>{




return{}
})();