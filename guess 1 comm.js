// picking a number between a number beteewn 0 to 1 and * by 100.
var Answer = Math.round(Math.random()*100);
//unlemitt turns
var Turns=0;

var Correct=false;
//add one to the turns.
Turns++;
//keep loop untill the answer is corect.
while (Correct==false) {
    //check the input if the answer is right
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    //check if the answer is the right the answer.
    if (Guess == Answer) {
        //corect and the number of the guesses
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        // if the snswer is corect print aleart.
        Correct = true;
    }
    //check if answer is bigher then answer
    else if (Guess > Answer) {
        //go lower
        alert("Hint: Try a lower number!");
    }// check if answer is smaller then amswer
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    
    Turns++;
} //if it's right answer print thank you
alert("Thank you for playing.");
