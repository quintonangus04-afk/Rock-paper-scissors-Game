const rockBtn = document.getElementById('Rock')
const paperBtn = document.getElementById('Paper')
const scissorsBtn = document.getElementById('Scissors')
const outComeText = document.getElementById('computerChoiceText')
const scoreTracker = document.getElementById('scoreTracker')

let UserScore = 0
let ComputerScore = 0
let userChoice = ""

// GAME OVER SCREEN
function gameOver(winnerPlayer) {
    // Hide game UI
    rockBtn.style.display = "none"
    paperBtn.style.display = "none"
    scissorsBtn.style.display = "none"
    scoreTracker.style.display = "none"

    let finalMessage = ""

    if (winnerPlayer === "User") {
        finalMessage = `
            🎉 You won the match! 🎉<br><br>
            Final Score: ${UserScore} – ${ComputerScore}<br><br>
            Tip: Try predicting the computer’s pattern next time!
        `
    } else {
        finalMessage = `
            😞 The computer won the match 😞<br><br>
            Final Score: ${UserScore} – ${ComputerScore}<br><br>
            Tip: Mix up your choices to avoid being predictable!
        `
    }

    outComeText.innerHTML = finalMessage
}

// RESET UI AFTER EACH ROUND
function resetGame(UserC) {
    rockBtn.classList.add('choiceBtn')
    paperBtn.classList.add('choiceBtn')
    scissorsBtn.classList.add('choiceBtn')

    rockBtn.classList.remove('choiceBtnActive', 'choiceBtnDisabled')
    paperBtn.classList.remove('choiceBtnActive', 'choiceBtnDisabled')
    scissorsBtn.classList.remove('choiceBtnActive', 'choiceBtnDisabled')

    outComeText.innerHTML = ""

    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
}

// COMPUTER CHOICE
function computerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const choice = choices[Math.floor(Math.random() * 3)]
    console.log("Computer choice:", choice)
    return choice
}

// CALCULATE OUTCOME
function GameOutcomeCalculator(UserPlays) {
    const ComputerPlays = computerChoice()
    let gameOutcome

    if (UserPlays === ComputerPlays) {
        gameOutcome = "draw"
    } else if (
        (UserPlays === "rock" && ComputerPlays === "scissors") ||
        (UserPlays === "paper" && ComputerPlays === "rock") ||
        (UserPlays === "scissors" && ComputerPlays === "paper")
    ) {
        gameOutcome = "win"
    } else {
        gameOutcome = "lose"
    }

    return {
        outCome: gameOutcome,
        computerPlay: ComputerPlays
    }
}

// DISPLAY OUTCOME + CHECK FOR GAME OVER
function outComeDisplay(OC, CompuC, UserC) {

    // Highlight user choice
    if (UserC === "rock") rockBtn.classList.add('choiceBtnActive')
    if (UserC === "paper") paperBtn.classList.add('choiceBtnActive')
    if (UserC === "scissors") scissorsBtn.classList.add('choiceBtnActive')

    if (OC === "draw") {
        outComeText.innerHTML = `The computer played ${CompuC}, it's a draw.`
    } else if (OC === "win") {
        UserScore++
        outComeText.innerHTML = `The computer played ${CompuC}, you won this round.`
    } else {
        ComputerScore++
        outComeText.innerHTML = `The computer played ${CompuC}, you lost this round.`
    }

    scoreTracker.innerHTML = `${UserScore} / ${ComputerScore}`

    // GAME OVER CHECK
    if (UserScore === 10) {
        gameOver("User")
        return
    }

    if (ComputerScore === 10) {
        gameOver("Computer")
        return
    }

    setTimeout(() => resetGame(UserC), 2000)
}

// BUTTON CLICK HANDLERS
function handleClick(choice) {
    userChoice = choice
    console.log("User choice:", userChoice)

    rockBtn.classList.add('choiceBtnDisabled')
    paperBtn.classList.add('choiceBtnDisabled')
    scissorsBtn.classList.add('choiceBtnDisabled')

    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true

    let returnedData = GameOutcomeCalculator(userChoice)
    outComeDisplay(returnedData.outCome, returnedData.computerPlay, userChoice)
}

rockBtn.addEventListener('click', () => handleClick("rock"))
paperBtn.addEventListener('click', () => handleClick("paper"))
scissorsBtn.addEventListener('click', () => handleClick("scissors"))
