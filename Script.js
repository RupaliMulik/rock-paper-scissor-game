let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const user_Score=document.querySelector('#user-score');
const computer_Score=document.querySelector('#computer-score');

const genComputerChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3) //returns a random number between 0 and 2
   return options[randIdx]; //returns a random choice from the options array    
    
};

const drawGame=()=>{
    console.log("It's a tie!");
    msg.innerText="Game is Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        user_Score.innerText=userScore; //update user score
        console.log("You win!");
        msg.innerText=`you win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        computer_Score.innerText=computerScore; //update computer score
        console.log("You lose!");
        msg.innerText=`you lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer choice
    const computerChoice=genComputerChoice();
    console.log("computer choice=",computerChoice);
    if(userChoice===computerChoice){
        //It's a tie
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            computerChoice==="paper" ? userWin=false : userWin=true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            computerChoice==="scissors" ? userWin=false : userWin=true;   
    }
    else{
       
        //rock,paper
        computerChoice==="rock"?userWin=false:userWin=true;
    }
    showWinner(userWin,userChoice,computerChoice);
}

};

choices.forEach((choice) => { // Loop through each choice element(div)
    choice.addEventListener('click', () => { // Add click event listener to each choice
        const userChoice=choice.getAttribute('id'); // Get the id of the clicked choice
        
        playGame(userChoice)
        
    });

})