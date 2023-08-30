const btnChoices = document.querySelectorAll('.btn_choice');
        const result = document.querySelector('.result');
        
        
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
                    result.textContent = "Game over!";
                }
            });
        });


        function rockChoice(compChoice){
            if (compChoice == 1){
                result.textContent = "It is a draw!!";
            }else if(compChoice == 2){
                result.textContent = "You loose, paper beats rock!!"
            }else if(compChoice == 3){
                result.textContent = "You win, Rock beats Scissors!!";
            }
        }

        function paperChoice(compChoice){
            if (compChoice == 1){
                result.textContent = "You win Paper beats Rock!!";
            }else if(compChoice == 2){
                result.textContent = "It is a draw!!"
            }else if(compChoice == 3){
                result.textContent = "You loose, Scissor beats Paper!!";
            }
        }

        function scissorChoice(compChoice){
            if (compChoice == 1){
                result.textContent = "You loose, Rock beats Scissor!!";
            }else if(compChoice == 2){
                result.textContent = "You win, Scissor beats Paper!!"
            }else if(compChoice == 3){
                result.textContent = "It is a draw!!";
            }
        }
      
        