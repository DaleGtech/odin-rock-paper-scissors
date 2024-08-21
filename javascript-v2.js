/* step 1 : test JavaScript is linked correctly*/

console.log("Hello World")

/*Create two new variables named humanScore and computerScore in the 
global scope.
Initialize those variables with the value of 0. */

// Track score of Game

let humanScore = 0
let computerScore = 0

/* return one of the following string values: 0, 1, 2. rock = 0, paper = 1, scissors = 3 */

//Function to let the computer make a choice of 0, 1 or 2.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    //console.log(randomNumber)
    return randomNumber
}

// Function to let user pick rock, paper, or scissors
function getHumanChoice() {
    const human = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase()
    //console.log(human) 
    if (human === "rock") 
        return 0
    else if (human === "paper") 
        return 1
    else if (human === "scissors") 
        return 2
    //for an invalid input
    else{
        console.log("Invalid choice. Please choose 'rock', 'paper', 'scissors'.")
        return getHumanChoice() // Recursively ask for valid input
    }  
}


/* Plays a single round, increments the round winner’s score and logs 
a winner announcement.*/

function playRound(humanChoice, computerChoice) {
    //humanChoice = getHumanChoice()
    //computerChoice = getComputerChoice()
/* rock = 0, paper = 1, scissors = 2. rock > scissors, paper > rock, 
scissors > paper*/
    if (humanChoice === computerChoice){
        return ("It's a tie")
    } else if (humanChoice === 0 && computerChoice === 2 ) {
        humanScore ++
        return ("Human wins: 'Rock' beats 'Scissors'")
    } else if (humanChoice === 1 && computerChoice === 0 ) {
        humanScore ++
        return ("Human wins: 'Paper' beats 'Rock'")
    } else if (humanChoice == 2 && computerChoice == 1 ) {
        humanScore ++
        return ("Human wins: 'Scissors' beats 'Paper'")
    } else {
        computerScore ++
        if (humanChoice == 2 && computerChoice == 0 ) {        
            return ("Computer wins: 'Rock' beats 'Scissors'")
        } else if (humanChoice === 0 && computerChoice === 1 ) {        
            return ("Computer wins: 'Paper' beats 'Rock'")
        } else if (humanChoice == 1 && computerChoice == 2 ) {        
            return ("Computer wins: 'Scissors' beats 'Paper'")}

    }
}

    // console.log(playRound())

    // function to log the score after each round //

function displayScore() {
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)
}

// function to determine overall winner of the game

function finalWinner() {
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game!")
    } else {
        console.log("it's a tie game!")
    }
    
}


/* function to play 5 rounds by calling playRound 5 times */
//console.log(humanScore, computerScore)

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i + ":");

        //get new choices every round

        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()

        console.log(playRound(humanChoice, computerChoice))

        displayScore()
    }

    //after 5 rounds display the final winner by calling finalWinner

    finalWinner()
       
}
// start the game
playGame()   


