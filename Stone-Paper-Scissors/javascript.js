// const choices = document.querySelectorAll('.choice');
// let msg  = document.querySelector('#msg');

// let userScorevar = document.querySelector('#user');
// let comscorevar = document.querySelector('#comp');

//  let userScore = 0;
//  let comscore = 0;

// choices.forEach((choice) =>{
// // console.log(choice);
// choice.addEventListener('click', () =>{
//     let userchoice = choice.getAttribute('id');
//     // console.log('choice was clicked',userchoice);
//     playGame(userchoice);
// })
// })

// let GetCOmchoice = () =>{
// let options = ['rock', 'paper', 'scissors'];
// let random = Math.floor(Math.random() * 3);
// return (options[random])
// }

// let drawGame = () =>{
//     // console.log('Game is draw');
//     msg.innerText = 'Game is draw. Play again';
//     msg.style.background = 'blue';
// }



// let showWin = (userwin,userchoice,comchoice) =>{
//     if(userwin) {
//         // console.log('you win');
//         userScore++;
//         userScorevar.innerText = userScore;
//         msg.innerText = `you win! your ${userchoice} beats computer ${comchoice}`;
//         msg.style.background = 'green';
//     }else{
//         // console.log('you loss');
//         comscore++;
//         comscorevar.innerText = comscore;
//         msg.innerText = `you loss computer ${comchoice} beats your ${userchoice}`;
//         msg.style.background = 'red';
//     }
// }

// let playGame = (userchoice) =>{
// console.log(`user choice ${userchoice}`);
// let comchoice = GetCOmchoice();
// console.log(`Com choice ${comchoice}`);

// if(userchoice === comchoice){
//     drawGame();
// }else{
//  let userwin = true;
//     if(userchoice === 'rock'){
//         userwin = comchoice === 'paper' ? false : true;
//     }else if(userchoice === 'paper'){
//         userwin = comchoice === 'scissors' ? false : true;
//     }else{
//         userwin = comchoice === 'rock' ? false : true;
//     }
//     showWin(userwin, userchoice, comchoice);

// }

// }



let choise = document.querySelectorAll(".choice");
let usercount = document.querySelector("#user");
let compcount = document.querySelector("#comp");
let msg = document.querySelector("#msg")

choise.forEach((chois) =>{
   chois.addEventListener("click", () =>{
    let user = chois.getAttribute("id");
    // console.log(user)
    playgame(user);
   })
})

let comchoice =() =>{
    let arr = ["rock", "scissors", "paper"];
    let random = Math.floor(Math.random(arr)*3)
    return (arr[random]);
}

let gamedraw =()=>{
    msg.innerText = `game is draw`;
    msg.style.backgroundColor ="yellow";
    msg.style.color ="black"
}

let userscore= 0;
let comscore= 0;

let showWin =(userwin,user,com)=>{
    if(userwin){
       msg.innerText = `you win ${user} beats ${com}`;
       msg.style.backgroundColor ="green"
       userscore++;
       usercount.innerText = userscore;
    }else{
        msg.innerText = `you loss ${com} beats ${user}`;
        msg.style.backgroundColor ="red"
        comscore ++;
        compcount.innerText = comscore;

    }
} 

let playgame = (user) =>{
    console.log(`user choice is ${user}`);

    let com = comchoice();
    console.log(`computer choice is ${com}`)

    if(user === com){
        gamedraw();
    }else{
        let userwin = true;
        if(user === "rock"){
          userwin =  com === "paper" ? false : true
        }else if(user === "paper"){
            userwin = com === "scissors" ? false : true
        }else{
            userwin = com === "rock" ? false:true
        }
        showWin(userwin,user,com)
    }
}

