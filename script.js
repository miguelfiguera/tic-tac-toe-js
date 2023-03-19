//variables for testing.
let currentPlayer = {};
currentPlayer.marker = "Q";

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
    two.src = "Borg_Queen_2372.jpg";
  };

  let x = getRandomIntInclusive(1, 2);

  const images = () => {
    return x == 1 ? picard() : janeway();
  };

  return {images}
})();

// eventlisteners and functions

const eventListenerDivs = (() => {
  let divs = document.getElementsByClassName("gameSquare");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      if (divs[i].firstChild) {
      } else {
        let p = document.createElement("p");
        p.innerText = currentPlayer.marker;
        p.classList.add("playersChoice");
        p.id = "p" + [i];
        divs[i].appendChild(p);
        //I should append the players swap here.
        //add a check for winning here also nums of ps go
        //from 0 to 8
      }
    });
  }
  return { divs};
})();

const createPlayer=(()=>{ 
  let form=document.getElementById("form")
  form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let name1=document.getElementById("name1").value
    let name2=document.getElementById("name2").value
    player1=Player(name1,"Q");
    player2=Player(name2,"X");
    let nameboard1=document.getElementById("players1name");
    nameboard1.innerText=player1.getName()
    let nameboard2=document.getElementById("players2name");
    nameboard2.innerText=player2.getName()
    form.classList.add("hidden")
    battlefield.images()
    //win count
  })
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
    return winCount;
  };
  const getPlayerSquares = () => {
    return playerSquares;
  };
  const getMarker = () => {
    return marker;
  };
  return { getMarker, getName, getWinCount, isHuman, getPlayerSquares };
}

// handling form

// game controller (game steps)

const game = (() => {



  return {};
})();
