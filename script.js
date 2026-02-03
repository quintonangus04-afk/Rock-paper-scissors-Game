const rockBtn = document.getElementById('Rock')
const paperBtn = document.getElementById('Paper')
const scissorsBtn = document.getElementById('Scissors')
const outComeText = document.getElementById('computerChoiceText')
const scoreTracker = document.getElementById('scoreTracker')
let UserScore = 0
let ComputerScore = 0

let userChoice = ""

function resetGame(UserC){

    if (UserC == "rock"){
        rockBtn.classList.add('choiceBtn')
        rockBtn.classList.remove('choiceBtnActive')
        paperBtn.classList.add('choiceBtn')
        scissorsBtn.classList.add('choiceBtn')
        paperBtn.classList.remove('choiceBtnDisabled')
        scissorsBtn.classList.remove('choiceBtnDisabled')
    } else if (UserC == "paper"){
        paperBtn.classList.add('choiceBtn')
        paperBtn.classList.remove('choiceBtnActive')
        rockBtn.classList.add('choiceBtn')
        scissorsBtn.classList.add('choiceBtn')
        rockBtn.classList.remove('choiceBtnDisabled')
        scissorsBtn.classList.remove('choiceBtnDisabled')
    } else{
        scissorsBtn.classList.add('choiceBtn')
        scissorsBtn.classList.remove('choiceBtnActive')
        paperBtn.classList.add('choiceBtn')
        rockBtn.classList.add('choiceBtn')
        paperBtn.classList.remove('choiceBtnDisabled')
        rockBtn.classList.remove('choiceBtnDisabled')
    }
    outComeText.innerHTML = ""
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false    
}

function computerChoice(){
    let rand01 = Math.random() * 3
    let CompuChoice = Math.floor(rand01)
    if (CompuChoice == 0){
        CompuChoice = "rock"
    } else if (CompuChoice == 1){
        CompuChoice = "paper"
    } else {
        CompuChoice = "scissors"
    }
    console.log('Computer choice has been generated, the choice was:',CompuChoice)
    return CompuChoice
}

function GameOutcomeCauculator(UserPlays){
    let ComputerPlays = computerChoice()
    let gameOutcome
    if (UserPlays == ComputerPlays){
        gameOutcome = "draw"
    } else if (ComputerPlays == "rock" && UserPlays == "scissors"){
        gameOutcome = "loose"
    } else if (UserPlays == "rock" && ComputerPlays == "scissors"){
        gameOutcome = "win"
    } else if (ComputerPlays == "paper" && UserPlays == "rock"){
        gameOutcome = "loose"
    } else if (ComputerPlays == "rock" && UserPlays == "paper"){
        gameOutcome = "win"
    } else if (ComputerPlays == "paper" && UserPlays == "scissors"){
        gameOutcome = "win"
    } else {
        gameOutcome = "loose"
    }

    return {
        outCome: gameOutcome,
        computerPlay: ComputerPlays
    }


}

function outComeDisplay(OC, CompuC, UserC){

    if (UserC == "rock"){
        rockBtn.classList.add('choiceBtnActive')
        rockBtn.classList.remove('choiceBtnDisabled')
    } else if (UserC == "paper"){
        paperBtn.classList.add('choiceBtnActive')
        paperBtn.classList.remove('choiceBtnDisabled')
    } else{
        scissorsBtn.classList.add('choiceBtnActive')
        scissorsBtn.classList.remove('choiceBtnDisabled')
    }

    if (OC == "draw"){
        outComeText.innerHTML = `The computer played ${CompuC}, you drawed this game.`
    } else if (OC == "win"){
        UserScore = UserScore + 1
        outComeText.innerHTML = `The computer played ${CompuC}, you won this game.`
        scoreTracker.innerHTML = `${UserScore} / ${ComputerScore}`
    } else{
        ComputerScore = ComputerScore + 1
        outComeText.innerHTML = `The computer played ${CompuC}, you loose this game.`
        scoreTracker.innerHTML = `${UserScore} / ${ComputerScore}`
    }
    setTimeout(() => resetGame(UserC), 2000);

}

rockBtn.addEventListener('click', function(){
    userChoice = "rock"
    console.log('User choice inputed into script, choice was:',userChoice)
    rockBtn.classList.add('choiceBtnDisabled')
    rockBtn.classList.remove('choiceBtn')
    paperBtn.classList.add('choiceBtnDisabled')
    paperBtn.classList.remove('choiceBtn')
    scissorsBtn.classList.add('choiceBtnDisabled')
    scissorsBtn.classList.remove('choiceBtn')
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
    retunedData = GameOutcomeCauculator(userChoice)
    outComeDisplay(retunedData.outCome, retunedData.computerPlay, userChoice)
});

paperBtn.addEventListener('click', function(){
    userChoice = "paper"
    console.log('User choice inputed into script, choice was:',userChoice)
    rockBtn.classList.add('choiceBtnDisabled')
    rockBtn.classList.remove('choiceBtn')
    paperBtn.classList.add('choiceBtnDisabled')
    paperBtn.classList.remove('choiceBtn')
    scissorsBtn.classList.add('choiceBtnDisabled')
    scissorsBtn.classList.remove('choiceBtn')
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
    retunedData = GameOutcomeCauculator(userChoice)
    outComeDisplay(retunedData.outCome, retunedData.computerPlay, userChoice)
});

scissorsBtn.addEventListener('click', function(){
    userChoice = "scissors"
    console.log('User choice inputed into script, choice was:',userChoice)
    rockBtn.classList.add('choiceBtnDisabled')
    rockBtn.classList.remove('choiceBtn')
    paperBtn.classList.add('choiceBtnDisabled')
    paperBtn.classList.remove('choiceBtn')
    scissorsBtn.classList.add('choiceBtnDisabled')
    scissorsBtn.classList.remove('choiceBtn')
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
    retunedData = GameOutcomeCauculator(userChoice)
    outComeDisplay(retunedData.outCome, retunedData.computerPlay, userChoice)
});

