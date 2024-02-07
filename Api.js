const url ="https://cat-fact.herokuapp.com/facts";
let para = document.querySelector("#class");
let btn = document.querySelector("#btn");



let getfact = async () =>{
    console.log("getting data....")
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    para.innerText = data[0].text
}

btn.addEventListener("click" , getfact)