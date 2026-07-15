//VARIABLES
const startButton = document.querySelector(".start-button")
const humanChoiceButton = document.querySelectorAll(".human-choices-button");
const overallWinner = document.querySelector("#who-won")
const replayButton = document.querySelector(".replay-button");
const playRoundButton = document.querySelector("#round");
const resultsPageContainer = document.querySelector("#result-screen");
const resultsPageElements = resultsPageContainer.querySelectorAll("div, h4, h1, img, button");
const humanCounter = document.querySelector("#human-counter");
const computerCounter = document.querySelector("#computer-counter")

const gamestate = {
    humanScore: 0,
    computerScore: 0,
    clickCount: 0,
}

const screens = {
    start: document.querySelector("#start-game-screen"),
    choice: document.querySelector("#human-choices"),
    results: document.querySelector("#result-screen")
};

//===FUNCTIONS===//

function showScreen(name) {
    Object.values(screens).forEach(screen => {
        screen.style.display = "none"
    })

    screens[name].style.display = "flex";
}

function loadGameStartState() {
    showScreen("start")
}

function startGame(){
    resetResultsPage();
    if(gamestate.clickCount === 5){
        gamestate.humanScore = 0;
        gamestate.computerScore = 0;
        gamestate.clickCount = 0;
        showScreen("start");
    } else
        showScreen("choice")
}


function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    
    decideWinner(humanChoice, computerChoice)
    console.log(gamestate.computerScore);
    console.log(gamestate.humanScore);

    gamestate.clickCount++

    showResults(humanChoice, computerChoice);

    if (gamestate.clickCount === 5){
        playRoundButton.textContent = "Play Again?";
        showOverallWinner()
    } else {
        playRoundButton.textContent = "Play round " + (gamestate.clickCount + 1)
    }

}

function getHumanChoice(event) {
    let humanChoice;
    humanChoice = event.currentTarget.id.charAt(0).toUpperCase() + event.currentTarget.id.slice(1);
    console.log("You chose " + humanChoice);

    showScreen("results")

    // Function to insert the correct image into the DOM
    return humanChoice
}

function getComputerChoice(){
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        computerChoice = "Rock";
    } else if (randomNumber === 1){
        computerChoice = "Paper";
    } else if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    console.log("Computer chose " + computerChoice)
    return computerChoice
}

function decideWinner(humanChoice, computerChoice){
    let winner;
    if (humanChoice === computerChoice){
        console.log("It's a draw.");
        winner = null
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") 
        || (humanChoice === "Scissors" && computerChoice === "Paper")
        || (humanChoice === "Paper" && computerChoice === "Rock")){
        winner = "human";
        console.log("You win!");
        gamestate.humanScore++
    } else {
        winner = "computer";
        console.log("Computer wins!")
        gamestate.computerScore++
    }
    return {winner, humanScore:gamestate.humanScore, computerScore:gamestate.computerScore}
}

function showOverallWinner() {
    if(gamestate.humanScore === gamestate.computerScore) {
        overallWinner.textContent = "It's a draw"
        } else if (gamestate.humanScore > gamestate.computerScore) {
            overallWinner.textContent = "You win!"
        } else if (gamestate.computerScore > gamestate.humanScore) {
            overallWinner.textContent = "Loser!"
        } else {
            overallWinner.textContent = "Something went wrong."
        }
}


function showResults(humanChoice, computerChoice) {
    const humanText = document.querySelector("#human-choice-text");
    const humanImg = document.querySelector("#human-result-image");
    const computerText = document.querySelector("#computer-choice-text");
    const computerImg = document.querySelector("#computer-result-image");

    if(humanChoice === "Rock") {
        humanImg.src = "./img/human_fist.png";
    } else if(humanChoice === "Paper") {
        humanImg.src = "./img/human_paper.png";
    } else if(humanChoice === "Scissors") {
        humanImg.src = "./img/human_scissors.png";
    }

    
    if(computerChoice === "Rock") {
        computerImg.src = "./img/computer_fist.png";
    } else if(computerChoice === "Paper") {
        computerImg.src = "./img/computer_paper.png";
    } else if(computerChoice === "Scissors") {
        computerImg.src = "./img/computer_scissors.png";
    }

    humanText.textContent = humanChoice;
    humanCounter.textContent = "Score: " + gamestate.humanScore
    computerText.textContent = computerChoice;
    computerCounter.textContent = "Score: " + gamestate.computerScore

    setTimeout(animateResultsPage, 500);
}

function animateResultsPage() {
    for (const element of resultsPageElements){
        element.classList.add("results-active");
    }
}

function resetResultsPage(){
    for (const element of resultsPageElements) {
        element.removeAttribute("style");
        element.classList.remove("results-active")
    }
}


//===DOM MANIPULATION===//

document.addEventListener("DOMContentLoaded", loadGameStartState)

startButton.addEventListener("click", startGame);

humanChoiceButton.forEach(button => {
    button.addEventListener("click", playRound);
})

playRoundButton.addEventListener("click", startGame)