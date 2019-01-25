// var inquirer = require("inquirer");
// var theWord = "Try Coded"
// var wordArr = theWord.split(' ');

// var letterArr = [];
// var underScore = [];
// var guessedLetter = [];



var Letter = function (letter) {
    this.newLetter = letter;
    this.hasBeenGuessed = false;

    this.letterGuess = function () {
        if (this.hasBeenGuessed) {
            console.log(this.newLetter);
        }
        else {
            console.log("_");
        }
    }
    this.letterChecker = function (letter) {
        if (this.newLetter.toLowerCase() === letter.toLowerCase()) {
            this.hasBeenGuessed = true;
        }
    }
}
//if guess is correct return correct letter if not "_"

// var newL = new Letter('T');
// newL.letterChecker('z');
// newL.letterGuess();

// newL.letterChecker('t');
// newL.letterGuess();

// newL.letterChecker('p');
// newL.letterGuess();


// exporting our Letter constructor
module.exports = Letter;