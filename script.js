    const choices = ["rock", "paper", "scissor"];


    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();

        if(!choices.includes(playerSelection))
            return "Invalid input. Check that your input is rock, paper, or scissor"

        if (playerSelection === computerSelection)
            return "Draw. Try again."

        const winConditions = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper"
        };

        if (winConditions[playerSelection] === computerSelection)
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        else
            return `You Lose. ${computerSelection} beats ${playerSelection}`;
        
    }

    // Randomly generate a number up to the array choice length to determine which item is chosen
    let getComputerChoice= () => {
        let decision = Math.floor(Math.random() * choices.length);
        return choices[decision];
    };


    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter rock, paper, or scissor");
        console.log(playRound(playerSelection,computerSelection));
    }