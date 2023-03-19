This is part of the Odin Project curriculum. [Tic-tac-toe](https://www.theodinproject.com/lessons/javascript-tic-tac-toe)

The importance of this work is learning how to write JS6 and making the code inaccesible. There has to be almost nothing inside the window scope, everything should be wraped in a factory or in a module.

## 1. Factory Function
The only factory is Player(), and it is writed to return all the needed data through methods with out direct access to the variables.

## 2. battlefield Module
This module has multiple inner functions to set up the gameboard, and to add a pair of images to the player's cards. This way it looks better.

## 3. eventListenerDivs Module
This Module just collects the divs created by battlefield and adds the event listener and the functions that create the gameflow, also it creates the <p> elements that work as markers inside the battlefield divs. The simplest method that I though for avoiding a marker in a taken spot was just to check for a child inside the div, if there is one, then nothing happens.

I added to every P an id, I though that it was going to be necessary to check for victory, but it was not. The best way (for me) was to keep track of the spots taken by a player and check for victory each turn.

## 4. createPlayer Module
This module adds the eventListener to the form to preventDefault and to create players using the value of the input. Here I will add the bot option in a later work.

This also add class hidden to the form, creates players, puts players name on the nameboards, calls for the battlefield.images() function, asigns a value to the currentPlayer variable and setups the score board too.

## 5. game Module

This one just adds the conditions for the game to work, swapPlayer is the function that determines currentPlayer for turns to happen.

CheckForVictory reviews the players moves to see if someone has already won each turn, if someone won, then calls for victory with that player, if not, it calls tie if no other move is available.

Victory and tie resets the divs with the same function, just trying to keep the code DRY.

## Conclusion.

There is none, I hope you enjoy the game.

M.Quintero.