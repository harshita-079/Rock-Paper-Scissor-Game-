const playerdisplay=document.querySelector(".player");
const compdisplay=document.querySelector(".computer");
const msg=document.querySelector(".result");
const playerscore=document.querySelector("#playerscore");
const computscore =document.querySelector("#compscore");

//generate user  choices
const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})

//game play
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};
const drawGame=(userChoice,compChoice)=>{
    msg.innerText="GAME DRAW!...AGAIN START";
    msg.style.backgroundColor="rgb(104, 51, 252)";
};
let userscore=0;
let compscore=0;
const showWinner=(userChoice,compChoice,userwin)=>{
    if(userwin){
        userscore++;
        playerscore.innerText=userscore;
        msg.innerText="WINNER";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        computscore.innerText=compscore;
        msg.innerText="LOSER";
        msg.style.backgroundColor="red";
    }
};
const playgame=(userChoice)=>{
    playerdisplay.textContent=`PLAYER: ${userChoice}`;
    //generate computer choice
    const compChoice=genCompChoice();
    compdisplay.textContent=`COMPUTER: ${compChoice}`;

    //fight
    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userwin=false;
        if(userChoice==="rock"){
            //paper scissor
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock scissor
            userwin=compChoice==="scissor"?false:true;
        }else{
            //paper rock
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userChoice,compChoice,userwin);
    }
};
