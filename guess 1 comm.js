// picking a number between a number beteewn 0 to 1 and * by 100.
var Answer = Math.round(Math.random()*100);
//unlemitt turns
var Turns=0;

var Correct=false;
//add one to the turns.
Turns++;

while (Correct==false) {
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    if (Guess == Answer) {
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        Correct = true;
    }
    else if (Guess > Answer) {
        alert("Hint: Try a lower number!");
    }
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    Turns++;
}
alert("Thank you for playing.");
