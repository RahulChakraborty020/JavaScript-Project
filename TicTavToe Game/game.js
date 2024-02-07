

let boxs = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let contain = document.querySelector(".msg-container");
let btn = document.querySelector("#btn");

let trunon = true;
let count =0;

let winpattern = [
    [0,1,2,],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxs.forEach((box) =>{
    box.addEventListener("click", () => {
        if(trunon){
            box.innerText = 'X';
            box.style.color = 'green'
            trunon = false
        
        }else{
            box.innerText = "O";
            box.style.color = 'blue'
            trunon =true
        }
        box.disabled = true;
        count++
       let win =  checkwin();

       if(count === 9 && !win){
            gamedraw()
       }
    })
})

let gamedraw =() =>{
    msg.innerText = "game is draw";
    contain.classList.remove("hide");
    disable()
} 

let showWiner =(winner) =>{
    msg.innerText = `congratulation winner is ${winner}`;
    contain.classList.remove("hide");
    disable()
}

let disable = () =>{
    for(boxx of boxs){
        boxx.disabled = true;
    }
}

let enable=()=>{
    for(boxx of boxs){
        boxx.disabled = false;
        boxx.innerText =''
    }
}

let resat =() => {
    contain.classList.add("hide");
    trunon = true;
    count = 0;
    enable()
}
btn.addEventListener("click", resat)
newbtn.addEventListener("click", resat)

let checkwin =() =>{
    for(key of winpattern){
        let posval1 = boxs[key[0]].innerText; 
        let posval2 = boxs[key[1]].innerText; 
        let posval3 = boxs[key[2]].innerText;
        
       if(posval1 !='' && posval2 !='' && posval3 !='' ){
        if(posval1 === posval2 && posval2 === posval3){
            showWiner(posval1)

        }
       }
        
    }
}




    
    
