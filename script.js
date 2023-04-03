

let randomChoice

function getComputerChoice(){
    let randomChoiceNum = Math.floor(Math.random()*3)+1;
   
    if(randomChoiceNum==1){
       return randomChoice='Rock';
    }else if(randomChoiceNum==2){
        return randomChoice='Paper';
    }else{
      return  randomChoice='Scissor';
    }
  
}





function singleRound(playerSelection,computerSelection){
    playerSelection = userInput;
    if(playerSelection == 'rock' && computerSelection == 'Paper'){
        console.log('You lose! Paper beats Rock');
    }else if(playerSelection== 'rock' && computerSelection == 'Scissor' ){
        console.log('you win! Rock beats scissor');
    }else if(playerSelection=='rock' && computerSelection =='Rock'){
        console.log('It is a Draw! Try Again');
    }if(playerSelection == 'paper' && computerSelection == 'Rock'){
        console.log('You win! Paper beats Rock');
    }else if(playerSelection== 'paper' && computerSelection == 'Scissor' ){
        console.log('you loose! scissor beats paper');
    }else if(playerSelection=='paper' && computerSelection =='Paper'){
        console.log('It is a Draw! Try Again');
    }if(playerSelection == 'scissor' && computerSelection == 'Paper'){
        console.log('You win! Scissor beats paper');
    }else if(playerSelection== 'scissor' && computerSelection == 'Rock' ){
        console.log('you loose! Rock beats scissor');
    }else if(playerSelection=='scissor' && computerSelection =='Scissor'){
        console.log('It is a Draw! Try Again');
    }

}

const userInput=prompt('Enter your Choice! ').toLowerCase();
const computerSelection=getComputerChoice();
singleRound(userInput,computerSelection);
