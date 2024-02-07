// let boxs = document.querySelectorAll('.box');
// let btn = document.querySelector('#btn');
// let msg = document.querySelector('#msg');
// let newbtn = document.querySelector('#new-btn');
// let msgcontainer = document.querySelector('.msg-container')


// let turnon = true;
// let count = 0;

// let winpatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ]


// let reset = () =>{
//     turnon = true;
//     count = 0;
//     enable();
//     msgcontainer.classList.add("hide");
// } 

// let enable = ()=>{
//         for(let box of boxs) {
//             box.disabled = false;
//             box.innerText = "";
//         }
//     }
//     newbtn.addEventListener("click", reset);  
//     btn.addEventListener("click", reset);



// boxs.forEach((box) =>{
//     box.addEventListener('click', () =>{
//         console.log('box clicked');
//         if(turnon) {
//             box.innerText = 'X',
//             box.style.color = 'green'
//             turnon = false
//         }else{
//             box.innerText = 'O';
//             turnon = true;
//             box.style.color = 'blue'
//         }
//         box.disabled = true;
//         count++;

//         let iswinner = checkwin();

//         if(count === 9 && !iswinner){
//             gamedraw();
//         }

//         // checkwin();
//     });
// });



// let gamedraw = () =>{
//     msg.innerText = 'game is draw';
//     msgcontainer.classList.remove('hide');
//     disable();
// }


// let disable = ()=>{
//     for(let box of boxs) {
//         box.disabled = true;
//     }
// } 

//     let Showwinner = (winer) =>{
//         msg.innerText = `congratulations, winner is ${winer}`;
//         msgcontainer.classList.remove('hide');
//         disable();
//     }

//     let checkwin = () =>{
//         for( pattern of winpatterns) {
//             // console.log(pattern[0], pattern[1], pattern[2], );
//             // console.log(boxs[pattern[0]], boxs[pattern[1]], boxs[pattern[2]],);
          
//             let pos1val = boxs[pattern[0]].innerText;
//             let pos2val = boxs[pattern[1]].innerText;
//             let pos3val = boxs[pattern[2]].innerText;

//             if(pos1val != '' && pos2val != '' && pos3val != '' ){
//                 if(pos1val === pos2val && pos2val === pos3val ){
//                     console.log('you are win', pos1val);
//                     Showwinner(pos1val)
//                 }
//             }

//         }
//     };


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




    
    
