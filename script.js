

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

function userInput(){
    return prompt('Enter your Choice! ').toLowerCase();
}

function game(){
        let counter = 1;
        while(counter<=5){
            singleRound(userInput,computerSelection);
            counter++;

       }           
}
let score=0;
function singleRound(playerSelection,computerSelection){
    playerSelection = userInput();
   
    if(playerSelection == 'rock' && computerSelection == 'Paper'){
        console.log('You lose! Paper beats Rock');
        score--;

    }else if(playerSelection== 'rock' && computerSelection == 'Scissor' ){
        console.log('you win! Rock beats scissor');
        score++;
    }else if(playerSelection=='rock' && computerSelection =='Rock'){
        console.log('It is a Draw! Try Again');
    }if(playerSelection == 'paper' && computerSelection == 'Rock'){
        console.log('You win! Paper beats Rock');
        score++;
    }else if(playerSelection== 'paper' && computerSelection == 'Scissor' ){
        console.log('you loose! scissor beats paper');
        score--;
    }else if(playerSelection=='paper' && computerSelection =='Paper'){
        console.log('It is a Draw! Try Again');
    }if(playerSelection == 'scissor' && computerSelection == 'Paper'){
        console.log('You win! Scissor beats paper');
        score++;
    }else if(playerSelection== 'scissor' && computerSelection == 'Rock' ){
        console.log('you loose! Rock beats scissor');
        score--;
    }else if(playerSelection=='scissor' && computerSelection =='Scissor'){
        console.log('It is a Draw! Try Again');
    }
   

}


const computerSelection=getComputerChoice();
game();
scorePoints();

function scorePoints(){
    console.log(`Score: ${score}`)
    if(score<3){
        console.log('You Lose! Computer Wins!!!');
    }else{
        console.log('You Win!, Congratulations!!!');
    }
}

