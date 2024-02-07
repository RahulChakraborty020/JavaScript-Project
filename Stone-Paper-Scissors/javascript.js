



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

