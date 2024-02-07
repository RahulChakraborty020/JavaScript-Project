let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdown = document.querySelectorAll(".dropdown select");

let btn = document.querySelector("#btn");

let msg = document.querySelector(".msg")


for( let selecte of dropdown){

    for(code in countryLIst){
    // console.log(code, countryLIst[code]);
    let newoption = document.createElement("option");
    newoption.innerText = code;
    newoption.value = code;
    if(selecte.name === "from" && code === "USD"){
        newoption.selected = "selected"
    }else if(selecte.name === "to" && code === "INR"){
        newoption.selected = "selected"
    }
    selecte.append(newoption) 
}

selecte.addEventListener("change", (evt) =>{
    updateFlag(evt.target);
})
}



let updateFlag = (ele)=>{
    let code = ele.value;
    let countryCode = countryLIst[code];
    let sourc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = sourc;
    
}


let fromcurr = document.querySelector(".form select");
let tocurr = document.querySelector(".to select");



let updateExchamge = async () =>{
    let amount = document.querySelector(".amount input");
let amtVal = amount.value;
if(amtVal === "" || amtVal<1){
    amtVal =1;
    amount.value = "1";
}
let newurl = `${url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let respons = await fetch(newurl);
let data = await respons.json();
let rate = data[tocurr.value.toLowerCase()]
// console.log(rate)
let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;

}

btn.addEventListener("click", async (evt) =>{
evt.preventDefault();

updateExchamge();

});

// window.addEventListener("load", () => {
//     updateExchamge();
//   });





























