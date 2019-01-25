var Letter = require("./letter.js");

var theWord = "Try Coded"
var wordArr = theWord.split(' ');

var letterArr = [];
var underScore = [];
var guessedLetter = [];

var Word = function (word) {
    this.wordLetters = [];
    for (var i = 0; i < word.length; i++) {
        var newL = new Letter(word[i]);
        this.wordLetters.push(newL);
    }
    this.wordGuess = function(){
        for (var i = 0; i < this.wordLetters.length; i++){
            this.wordLetters[i].letterGuess();
        }
    }

    this.letterChecker = function (letter) {
        for (var i = 0; i < this.wordLetters.length; i++) {
            this.wordLetters[i].letterChecker(letter);
        }

    }

}
var newW = new Word('Test');

newW.letterChecker('s');
newW.wordGuess();