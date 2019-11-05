function computerPlay()
{
    let rollChoice = (Math.random() * 3);
    rollChoice = Math.floor(rollChoice);
    console.log(rollChoice)
    switch(rollChoice)
    {
        case 0:
        var rock = "rock";
        return rock;
        
        case 1:
        var paper = "paper";
        return paper;

        case 2: 
        var scissor = "scissor";
        return scissor;
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock")
    {
        switch(computerSelection)
        {
            case "paper":
            return "lost";

            case "scissor":
            return "won";
        }
    }
    else if (playerSelection == "paper")
    {
        switch(computerSelection)
        {
            case "rock":
            return "won";

            case "scissor":
            return "lost";
        }
    }
    else if (playerSelection == "scissor")
    {
        switch(computerSelection)
        {
            case "rock":
            return "lost";

            case "paper":
            return "won";
        }
    }
    else
    {
        return "draw";
    }
    
}

function game(playerSelection)
{
    let computerSelection = computerPlay();
    let theWinner = playRound(playerSelection, computerSelection);
    let winnerString = decideWinner(theWinner, computerSelection, playerSelection);
    displayResult(winnerString);
    updateCounter(theWinner);
}

function decideWinner(theWinner, computerSelection, playerSelection)
{
    if(theWinner == "won")
    {
        playerScore++;
        return winnerString =  (playerSelection + " beats " +  computerSelection + "! You won!");
    }   
    else if(theWinner == "lost")
    {
        computerScore++;
        return winnerString = (computerSelection + " beats " + playerSelection + "! Sorry you lost!");
    }
    else
    {
       return winnerString = ("Both selected a " + playerSelection + "! It is a draw!");
    }
}

function displayResult(winner)
{
    const container = document.querySelector(".resultdisplay");
    const result = document.createElement('div');
    result.setAttribute('id', 'result');
    result.textContent = winner;
    container.removeChild(container.firstChild);
    container.appendChild(result);
}

function updateCounter(theWinner)
{
    let counterdisplay = "Player:" + playerScore + " : " + computerScore + "Computer" ;
    const container = document.querySelector(".counterdisplay");
    const counter = document.createElement('div');
    counter.setAttribute('id', 'counter');
    counter.textContent = counterdisplay;

    if(playerScore >= 5)
    {
        counter.textContent = "The Final Winner is: YOU!";
        disableButtons();

    }
    else if(computerScore >= 5)
    {
        counter.textContent = "Sorry the AI is to smart!";
        disableButtons();
    }

    container.removeChild(container.lastChild);
    container.appendChild(counter);
}

function disableButtons()
{
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissor').disabled = true;
}

let computerScore = 0, playerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(button.id)

    });
});