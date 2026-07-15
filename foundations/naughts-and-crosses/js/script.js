const gameController = (function() {
    let whosTurn = true;

    function startGame() {
        let player = getCurrent().player;
        display.updateAnnouncementText(`${player}'s turn`)
        display.allowClicksToggle();
    }

    function takeTurn(cell, cellNum) {
        let player = getCurrent().player;
        let marker = getCurrent().marker;

        display.addMarker(cell, marker);
        gameBoard.updateBoard(cellNum, marker);
        let turns = stats.updateTurns();
        whosTurn = !whosTurn;

        const result = gameBoard.checkWinner();
        if (result.winner !== null) {
            display.allowClicksToggle()
            display.updateAnnouncementText(`${result.winner} wins!`)
            display.highlightWin(result.combo);
            stats.updateWinnerStats(result.winner)
            display.updateCounters();
            display.showPlayAgain();
        } else if (turns === 9) {
            display.allowClicksToggle()
            display.updateAnnouncementText(`It's a draw!`)
            display.showPlayAgain();
        } else {
            display.updateAnnouncementText(`${player}'s turn`);
        }
    }

    function getCurrent() {
        const current = whosTurn 
            ? { player: "Player 1", marker: "X" }
            : { player: "Player 2", marker: "O" }
        
        return current
    }

    function resetGame() {
        gameBoard.resetGameBoard();
        stats.resetTurns();
        display.resetUI();
    }

    return {
        startGame,
        whosTurn,
        takeTurn,
        resetGame,
    }
})()

const gameBoard = (function() {
    let boardArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8",]

    function updateBoard(index, marker) {
        boardArr[index] = marker;
        return boardArr;
    }

    function resetGameBoard() {
        boardArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8",]
    }

    function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let combo of winningCombos) {
        const [a, b, c] = combo

        if (boardArr[a] === "X" && boardArr[b] === "X" && boardArr[c] === "X") {
            return { winner: "Player 1", combo: combo }
        }

        if (boardArr[a] === "O" && boardArr[b] === "O" && boardArr[c] === "O") {
            return { winner: "Player 2", combo: combo };
        }
    }

    return {winner: null, combo: null}
}

  // your checking logic here

  return {
    updateBoard,
    resetGameBoard,
    checkWinner,
  }
})()

const stats = (function() {

    const gameStats = {
        score: {
            "Player 1": 0,
            "Player 2": 0,
        },
        turns: 0,
    }

    function updateWinnerStats(winner) {
        gameStats.score[winner]++
        return gameStats.score;
    }

    function updateTurns() {
        gameStats.turns++
        return gameStats.turns;
    }

    function getScore() {
        let score = gameStats.score;
        return score;
    }

    function resetTurns() {
        gameStats.turns = 0;
        console.log(gameStats.turns)
    }

    return {
        updateWinnerStats,
        updateTurns,
        resetTurns,
        getScore,
    }
})()

const display = (function() {

    const header = document.querySelector(".header");
    const board = document.querySelector(".game-board")
    const startGameButton = document.querySelector(".start-game")
    let allowClicks = false;

    function eventListeners() {

        //show Instructions
        const instructionsButton = document.querySelector(".show-instructions");
        const modal = document.querySelector(".modal");
        const closeModalButton = document.querySelector(".close-modal");
        const cells = document.querySelectorAll(".cell");

        instructionsButton.addEventListener("click", () => {
            modal.showModal();
        } )
        closeModalButton.addEventListener("click", () => {
            modal.close();
        })

        //Start the game
        startGameButton.addEventListener("click", () => {
            if (startGameButton.classList.contains("play-again")){
                gameController.resetGame();
                startGameButton.classList.remove("play-again")
            }
            startGameButton.hidden = true;
            displayAnnouncements();
            gameController.startGame();
        })

        //Listen for player choice
        for (const cell of cells) {
            cell.addEventListener("click", (e) => {
                gameController.takeTurn(cell, cell.dataset.index);
            });
        }
    }

    function allowClicksToggle() {
        allowClicks = !allowClicks;
        board.style.pointerEvents = allowClicks ? "all" : "none";
    }

    //Creates a div for announcements to be displayed
    function displayAnnouncements() {
        if (document.querySelector(".announcement")) return;
        const announcement = document.createElement("h2");
        announcement.classList.add("announcement");
        header.appendChild(announcement);
    }

    function updateAnnouncementText (string) {
        let announcement = document.querySelector(".announcement")
        announcement.textContent = string;
        announcement.hidden = false;
    }

    function addMarker(cell, marker) {
        if (cell.querySelector("h1")) {
            return
        } else {
            const text = document.createElement("h1");
            text.textContent = marker
            cell.appendChild(text)
        }
    }
    

    function highlightWin(combo) {
        for (let num of combo) {
            let cell = document.querySelector(`[data-index="${num}"]`)
            cell.style.backgroundColor = "green"; 
        }
    }

    function uiCounters() {
        const p1Score = document.querySelector("#p1-score");
        const p2Score = document.querySelector("#p2-score");

        function updateCounters() {
            let score = stats.getScore()

            p1Score.textContent = `${score["Player 1"]}`
            p2Score.textContent = `${score["Player 2"]}`
        }

        return {updateCounters}
    }

    function showPlayAgain() {
        const announcement = document.querySelector("h2")
        announcement.hidden = true;
        startGameButton.textContent = "Play Again";
        startGameButton.classList.add("play-again")
        startGameButton.hidden = false;
    }

    function resetUI() {
        const cells = document.querySelectorAll(".cell");
        for (const cell of cells) {
            cell.style.backgroundColor = "";
            const text = cell.querySelector("h1");
            if (text) text.remove();
        }
    }


    return {
        eventListeners,
        updateAnnouncementText,
        addMarker,
        displayAnnouncements,
        allowClicksToggle,
        highlightWin,
        updateCounters: uiCounters().updateCounters,
        showPlayAgain,
        resetUI,
    }
})()

display.eventListeners();