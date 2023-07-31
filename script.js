    const choices = ["rock", "paper", "scissor"];
    let playerScore = 0;
    let computerScore = 0;
    const body = document.querySelector('body');

    const results = document.createElement('div');
    results.classList.add('score');
    results.textContent = `Score: Player (${playerScore}) Computer (${computerScore})`;
    body.appendChild(results);

    function playRound(playerSelection, computerSelection){
      
        if(!choices.includes(playerSelection))
            return "Invalid input. Check that your input is rock, paper, or scissor"

        if (playerSelection === computerSelection)
            return "Draw. Try again."

        const winConditions = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper"
        };

        if (winConditions[playerSelection] === computerSelection && (playerScore != 4)) {
            playerScore++;
            results.textContent = `Score: Player (${playerScore}) Computer (${computerScore})`;
            return `You Win! ${playerSelection} beats ${computerSelection}. Score: Player (${playerScore}) Computer (${computerScore})`;

        } 
        
        else if (winConditions[playerSelection] === computerSelection && playerScore == 4) {
            playerTally = ++playerScore;
            computerTally = computerScore;
            playerScore = 0;
            computerScore = 0;
            results.textContent = `Player wins the game! Final Score: Player (${playerTally}) Computer (${computerTally})Resetting Score...`;
            return `Player wins the game! Final Score: Player (${playerTally}) Computer (${computerTally})`
        }

        else if (winConditions[playerSelection] !== computerSelection && (computerScore != 4))  {
            computerScore++;
            results.textContent = `Score: Player (${playerScore}) Computer (${computerScore})`;
            return `You Lose. ${computerSelection} beats ${playerSelection}. Score: Player (${playerScore}) Computer (${computerScore})`;
        }

        else {
            results.textContent = `Score: Player (${playerScore}) Computer (${computerScore})`;
            playerTally = playerScore;
            computerTally = ++computerScore;
            playerScore = 0;
            computerScore = 0;
            results.textContent = `Computer wins the game! Final Score: Player (${playerTally}) Computer (${computerTally})Resetting Score...`;
            return `Computer wins the game! Final Score: Player (${playerTally}) Computer (${computerTally})`
        }
    }

    // Randomly generate a number up to the array choice length to determine which item is chosen
    let getComputerChoice= () => {
        let decision = Math.floor(Math.random() * choices.length);
        return choices[decision];
    };

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissor = document.querySelector('#scissor');

    rock.addEventListener('click', function (e) {
        console.log(playRound(rock.id, getComputerChoice()));
    });
    paper.addEventListener('click', function (e) {
        console.log(playRound(paper.id, getComputerChoice()));
    });
    scissor.addEventListener('click', function (e) {
        console.log(playRound(scissor.id, getComputerChoice()));
    });