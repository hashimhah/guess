//gussing game by Hasan
// Initial all the variables.
var smallLimit = 1,
  bigLimit = 25,
  tries = 5,
  guess = '',
  input = ('Guess a number between ' + smallLimit + ' and ' + bigLimit + ':'),
    // computer will choose a number 1-25
  answer = Math.floor(Math.random() * (bigLimit - smallLimit + 1)) + smallLimit;
// print the answer in the console page, and only the coder will know how to get thier.
console.log(answer)

// loop until the game ends.
while (tries > 0) {
    // ask the user for a guess.
    guess = prompt(input, guess);
    
    // If the cancel is pushed, that's mean the game is over.
    if (guess == null) {
        alert('you want to leave the game!');
        break;
    }
    // check the guess if its number.
    else if (isFinite(guess) && guess != '') {
        // make suer if the guess = to the number of the right guess.
        guess = +guess;
        
        // check the guess is less than the limit.
        if (guess < smallLimit) {
            alert('Your guess should be no less than ' + lowerLimit + '.');
        }
        // check the guess is biger than the limit.
        else if (guess > bigLimit) {
            alert('Your guess should be no greater than ' + bigLimit + '.');
        }
        // check if the guess is high.
        else if (guess > answer) {
            alert('Your guess is too high.');
        }
        // check if the guess is lower.
        else if (guess < answer) {
            alert('Your guess is too low');
        }
        // if the guess = to answer      
        else {
            alert('Great job, you got it!');
            break;
        }
    }
    // check if the guess is not a number.
    else {
        alert('You must enter a number as a guess.');
    }
    
    tries = tries - 1;
}
// check the tries that the suer used and let them know.
if (tries == 0) {
    alert('You have no more tries.  The number was ' + answer + '.');
}
