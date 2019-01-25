var Word = require("./word.js");
var inquirer = require("inquirer");

//ramdomly select word using the Word constructor to store it
var wordOptions = ["Mustache", "Comb", "Ducky"];
var selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

//Prompt the user for each guess and keeps track of users remaining guesses (inquirer)

