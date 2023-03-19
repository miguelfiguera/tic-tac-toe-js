//variables for testing.
let currentPlayer = {};
//currentPlayer.marker = "Q";

//Div Objects Board - module
const battlefield = (function () {
  let gameboard = document.getElementById("gameboard");
  for (let i = 1; i < 10; i++) {
    let div = document.createElement("div");
    div.classList.add("gameSquare");
    div.id = `square${i}`;
    gameboard.appendChild(div);
  }

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const janeway = () => {
    let one = document.getElementById("playerImg1");
    let two = document.getElementById("playerImg2");
    one.src = "janeway.jpg";
    two.src = "Borg_Queen_2372.jpg";
  };

  const picard = () => {
    let one = document.getElementById("playerImg1");
    let two = document.getElementById("playerImg2");
    one.src = "250.jpg";
    two.src = "Romulan_Commander.webp";
  };

  let x = getRandomIntInclusive(1, 2);

  const images = () => {
    return x == 1 ? picard() : janeway();
  };

  return { images };
})();

// eventlisteners and functions

const eventListenerDivs = (() => {
  let divs = document.getElementsByClassName("gameSquare");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      if (divs[i].firstChild) {
      } else {
        let p = document.createElement("p");
        p.innerText = currentPlayer.getMarker();
        p.classList.add("playersChoice");
        p.id = "p" + [i];
        divs[i].appendChild(p);
        currentPlayer.pushChoice(i);
        game.checkForVictory();
        game.swapPlayer();
      }
    });
  }
  return { divs };
})();

//creating players

const createPlayer = (() => {
  let form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    player1 = Player(name1, "Q");
    player2 = Player(name2, "X");
    let nameboard1 = document.getElementById("players1name");
    nameboard1.innerText = player1.getName();
    let nameboard2 = document.getElementById("players2name");
    nameboard2.innerText = player2.getName();
    form.classList.add("hidden");
    battlefield.images();
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");
    score1.innerText = `Score: ${player1.getWinCount()}`;
    score2.innerText = `Score: ${player2.getWinCount()}`;
    game.swapPlayer();
  });
})();

//Players Object Factory Function

function Player(name, marker) {
  let playerSquares = [];
  let winCount = [];
  let isHuman = true;

  const getName = () => {
    return name;
  };
  const getWinCount = () => {
    return winCount.length;
  };
  const getPlayerSquares = () => {
    return playerSquares;
  };
  const getMarker = () => {
    return marker;
  };
  const pushChoice = (number) => {
    playerSquares.push(number);
  };
  const addtoWinning = () => {
    winCount.push("Win");
  };
  const resetPlayerSquares = () => {
    playerSquares = [];
  };
  return {
    addtoWinning,
    getMarker,
    getName,
    getWinCount,
    pushChoice,
    isHuman,
    getPlayerSquares,
    resetPlayerSquares,
  };
}

// game controller (game steps)

const game = (() => {
  const swapPlayer = () => {
    return currentPlayer == player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };

  const checkForVictory = () => {
    let plyrs = [player1, player2];
    for (let i = 0; i < plyrs.length; i++) {
      //horizontal
      if (
        plyrs[i].getPlayerSquares().indexOf(0) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(2) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(1) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        plyrs[i].getPlayerSquares().indexOf(3) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(4) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(5) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        plyrs[i].getPlayerSquares().indexOf(6) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(7) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(8) >= 0
      ) {
        victory(plyrs[i]);
      }

      //vertical
      else if (
        plyrs[i].getPlayerSquares().indexOf(6) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(3) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(0) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        plyrs[i].getPlayerSquares().indexOf(1) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(4) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(7) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        plyrs[i].getPlayerSquares().indexOf(2) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(5) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(8) >= 0
      ) {
        victory(plyrs[i]);
      }

      //diagonal
      else if (
        plyrs[i].getPlayerSquares().indexOf(0) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(4) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(8) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        plyrs[i].getPlayerSquares().indexOf(2) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(4) >= 0 &&
        plyrs[i].getPlayerSquares().indexOf(6) >= 0
      ) {
        victory(plyrs[i]);
      } else if (
        player1.getPlayerSquares().length + player2.getPlayerSquares().length ==
        9
      ) {
        tie();
      } else {
      }
    }
  };

  const updateScore=(winner)=>{
    winner==player1 
    ? score1.innerText=`Score: ${player1.getWinCount()}`
    : score2.innerText=`Score: ${player2.getWinCount()}`
  }

  const victory = (player) => {
    player.addtoWinning();
    updateScore(player);
    player1.resetPlayerSquares();
    player2.resetPlayerSquares();
    alert(`Congrats ${player.getName()} You have won this round!`);
    resetDivs()
  }

  const tie = () => {
    player1.resetPlayerSquares();
    player2.resetPlayerSquares();
    alert("No winners this Round");
    resetDivs()

  };

  const resetDivs=()=>{
    let divs = document.getElementsByClassName("gameSquare");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].firstChild) {
        divs[i].firstChild.remove();
      } else {
      }
    }
  }
  return { resetDivs,swapPlayer, victory, checkForVictory, tie,updateScore };
})();
