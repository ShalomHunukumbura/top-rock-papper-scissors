const btnChoices = document.querySelectorAll('.btn_choice');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.comp-score');
let compScore = 0;
let roundScore = 0;
        
        let randChoice;
        let round = 0;

        function computerachoice(){
            return Math.floor(Math.random() * 3)+1;            
        }
        
        
    btnChoices.forEach(btnChoice => {
            btnChoice.addEventListener('click', () => {
                if (round < 5) {
                    const btnName = btnChoice.getAttribute('name');
                    const compChoice = computerachoice();

                    if (btnName === 'rock') {
                        rockChoice(compChoice);
                    } else if (btnName === 'paper') {
                        paperChoice(compChoice);
                    } else if (btnName === 'scissor') {
                        scissorChoice(compChoice);
                    }

                    round++;
                } else {
                    alert(`Gamw over. ${winner()}`);
                    document.getElementById('newGameButton').style.display = 'block';
                    
                }
            });
        });

        document.getElementById('newGameButton').addEventListener('click' ,()=>{
            round = 0;
            roundScore = 0;
            compScore = 0;

            result.innerHTML = '';
            playerScore.innerHTML = roundScore;
            computerScore.innerHTML = compScore;

            document.getElementById('newGameButton').style.display = 'none';
        });

        function updateScore(result){
            if(result == 'win'){
                roundScore++;
            }else if(result == 'lose'){
                roundScore--;
            }
            playerScore.innerHTML = roundScore;

        }

        function updateComputerScore(result){
            if(result=='win'){
                compScore++;
            }else if(result=='lose'){
                compScore--;
            }
            computerScore.innerHTML=compScore;
        }

        function rockChoice(compChoice){
            if (compChoice == 1){
                result.innerHTML = "It is a draw!!";
                updateScore('draw');
                updateComputerScore('draw');
            }else if(compChoice == 2){
                result.innerHTML = "You loose, paper beats rock!!"
                updateScore("lose");
                updateComputerScore('win');
            }else if(compChoice == 3){
                result.innerHTML = "You win, Rock beats Scissors!!";
                updateScore('win');
                updateComputerScore('lose');
            }
        }

        function paperChoice(compChoice){
            if (compChoice == 1){
                result.innerHTML = "You win Paper beats Rock!!";
                updateScore('win');
                updateComputerScore('lose');
            }else if(compChoice == 2){
                result.innerHTML = "It is a draw!!"
                updateScore('draw');
                updateComputerScore('draw');
            }else if(compChoice == 3){
                result.innerHTML = "You loose, Scissor beats Paper!!";
                updateScore('lose');
                updateComputerScore('win');
            }
        }

        function scissorChoice(compChoice){
            if (compChoice == 1){
                result.innerHTML = "You loose, Rock beats Scissor!!";
                updateScore('win');
                updateComputerScore('lose')
            }else if(compChoice == 2){
                result.innerHTML = "You win, Scissor beats Paper!!"
                updateScore('lose');
                updateComputerScore('win');
            }else if(compChoice == 3){
                result.innerHTML = "It is a draw!!";
                updateScore('draw');
                updateComputerScore('draw');
            }
        }

        function winner(){
            if(roundScore>compScore){
                return "Player wins";
            }else if(compScore>roundScore){
                return 'computer Wins';
            }else{
                return 'It is a draw'
            }
        }
      
        