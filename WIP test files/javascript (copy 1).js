/* step 1 : test JavaScript is linked correctly*/

console.log("Hello World")

/* Create a new function named getComputerChoice.*/
/* Write the code so that getComputerChoice will randomly 
return one of the following string values: “rock”, “paper” or 
“scissors”.
Hint: The Math.random method returns a random number that’s 
greater than or equal to 0 and less than 1. Think about how 
you can use this to conditionally return one of the multiple choices.*/

/* step 2: pseudocode: 
- create a variable to execute the following: use Math.random to 
return a number associated with the variables - use Math.floor to 
round the number down to an integer between 0 - 2
(3 numbers) = Math.floor(Math.random() * 3);.
- assign rock, paper, scissors to to numbers 0, 1, 2. 
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    //console.log(randomNumber)
    let rock = (randomNumber === 0)
    let paper = (randomNumber === 1)
    let scissors = (randomNumber === 2)
    return randomNumber}

    /*
    if (randomNumber === 0) {
        return "rock" }
        else if (randomNumber === 1) {
            return "paper" }
        else if (randomNumber === 2) {
            return "scissors" }      
}*/

//console.log(getComputerChoice())

/* Step 3: Write the logic to get the human choice:
- Create a new function named getHumanChoice.
- Write the code so that getHumanChoice will return one of the valid 
choices depending on what the user inputs.
- Hint: Use the prompt method to get the user’s input.
- Test what your function returns by using console.log.*/

/* step 3: pseudocode: 
- */

function getHumanChoice() {
    let human = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase()
    //console.log(human) 
    if (human === "rock") 
        return 0
    else if (human === "paper") 
        return 1
    else if (human === "scissors") 
        return 2  
}

/*console.log(getHumanChoice())*/

/* Step 4: Declare the players score variables
Your game will keep track of the players score. You will write 
variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the 
global scope.
Initialize those variables with the value of 0. */

let humanScore = 0
let computerScore = 0


/* Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function 
that takes the human and computer player choices as arguments, 
plays a single round, increments the round winner’s score and logs 
a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. 
Use these two parameters to take the human and computer choices as 
arguments.
Make your function’s humanChoice parameter case-insensitive so that 
players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string 
value representing the round winner, such as: “You lose! Paper beats 
Rock”.
Increment the humanScore or computerScore variable based on the round 
winner.*/

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
/* rock = 0, paper = 1, scissors = 2. rock > scissors, paper > rock, 
scissors > paper*/
    if (humanChoice === computerChoice)
        return ("It's a tie")
    else if (humanChoice === 0 && computerChoice === 2 ){
        humanScore ++
        return ("Human wins: 'Rock' beats 'Scissors'")}
    else if (humanChoice === 1 && computerChoice === 0 ){
        humanScore ++
        return ("Human wins: 'Paper' beats 'Rock'")} 
    else if (humanChoice == 2 && computerChoice == 1 ){
        humanScore ++
        return ("Human wins: 'Scissors' beats 'Paper'")}
    else if (humanChoice == 2 && computerChoice == 0 ){
        computerScore ++
        return ("Computer wins: 'Rock' beats 'Scissors'")}
    else if (humanChoice === 0 && computerChoice === 1 ){
        computerScore ++
        return ("Computer wins: 'Paper' beats 'Rock'")} 
    else if (humanChoice == 1 && computerChoice == 2 ){
        computerScore ++
        return ("Computer wins: 'Scissors' beats 'Paper'")}

    }

    console.log(playRound())

    // function to log the score after each round //

    function displayScore() {
        console.log("Human score: " + humanScore)
        console.log("Computer score: " + computerScore)
    }

    /* Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named 
playGame that calls playRound to play 5 rounds, keeps track of 
the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re 
declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times */


console.log(humanScore, computerScore)

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + ":");

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice )

        displayScore()

    }
playGame()    
}

console.log(playGame())

