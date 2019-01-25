var Letter = require("./letter.js");

var Word = function (word) {
    // takes in an array of 'new' Letter constructor obj.
    this.wordLetters = [];
    // loops through the word provided by the Word constructor
    for (var i = 0; i < word.length; i++) {
        var newL = new Letter(word[i]);
        this.wordLetters.push(newL);
    }
    // Loops through wordLetters and then runs letterGuess from letter.js
    this.wordGuess = function(){
        for (var i = 0; i < this.wordLetters.length; i++){
            this.wordLetters[i].letterGuess();
            // ### Still need to concatenate together for each word
        }
    }
    // takes character as argument then runs letterChecker from letter.js
    this.letterChecker = function (letter) {
        for (var i = 0; i < this.wordLetters.length; i++) {
            this.wordLetters[i].letterChecker(letter);
        }

    }

}
var newW = new Word('Test');

newW.letterChecker('s');
newW.wordGuess();

module.exports = Word;