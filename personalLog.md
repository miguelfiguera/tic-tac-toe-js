# Tic-Tac-Toe-JS

This is part of the Odin Project curriculum. [Tic-tac-toe](https://www.theodinproject.com/lessons/javascript-tic-tac-toe)

Objectives:
1. Develop a tic-tac-toe game.
2. Use as little as possible of global code.
3. Use factory function patterns and module patterns to complete this project.
4. Style it nicely if possible.
5. Star Trek themed, because of reasons...

## 1. Setting up HTML
A skelleton composed of: header, main>players sections+gameboard, and footer.

## 2. Function Factorys and Modules

As this is part of the project, I had some troubles understanding what is the best practice to do this and keep code private.

My answers are: to keep code private in a factory, you should return functions that give you access to the variables of the object. That way it can not be changed. You may put a `object.key="value" ` on the console, but that is on window level, If my code runs using the value returned from the functions of the object, the original value stays safe.

With the modules, something is similar, but as this is a IIEF you are not able to change anything anyways.

My best practice till now is to write the code on window scope, test it, see whats wrong, and then wrap it in a function (for factory) or a IIEF (for module). Thats the way.

## 3. Better commits

After reading a lot of material about what a good commit is, I'm trying to write using the best practices for the commits, imperative writing and all that. This way I hope that commits are clearer and my communication skills improve. Also, writing the commits in VScode is so different from everything else. No more -m flag for commits.