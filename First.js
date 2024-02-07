// fullName= 'rahul';          // hear fullName is camelCase. when variable name is two word then first one is small and second one is capital this caled camelCase. this is use in programming.




// const a ;       // const must be initialize value.
// console.log(a)





// {
//     let a = 10;
//     console.log(a)
// }
// console.log(a)          // not declear because this is block scope.


// const age = 23;         //number

// const price = 100.96;       //number

// const string = 'rahul';     // string

// const isFllow = true;       //boolean

// let x ;                   // undefined

// const nul = null;       //null

// const big = 1615351532176n;        //bigint

// const sym = Symbol('rahul');        //Symbol





// Q. Creat a const object called  'product' to store information in any amazone item?

// const product = {
//     name:'CT Ball Pen',
//     rating:3.9,
//     off: 5 ,
//     price:70
// };
// console.log(product)



// Q. Creat a const object called 'profile' to store infromation in your any account like (instagram)?


// const profile = {
//     name:'rahul',
//     post:100,
//     floowers: 1000,
//     following:80,
//     isflow: true,
//     infromation: 'i have a instagram account. My account name is rc212861. I have a 300 flowers'
// }
// console.log(profile)




//********************** */ CLASS-2**********************


// Arithmetic Operator---------------------
// const a =5;
// const b  = 2;

// console.log('a=',a, 'b=',b)
// console.log('a + b =',a+b)
// console.log('a - b =',a-b)
// console.log('a * b =',a*b)
// console.log('a / b =',a/b)
// console.log('a % b =',a%b)
// console.log('a ** b =',a**b)    // 5 ** 2

// Unary Operator-----------------------------------

// let a =2;
// // a = a + 1;
// a++
// // a--
// console.log(a)



// post ------------

// let c = 2;
// console.log('c++', c++)     // post increament  (2)
// // console.log('c--', c--) // post decreament (1) first time not work after that work .
// console.log('c=', c)


// pre---------------

// let x = 3;

// // console.log('--x', --x);     // pre decremeant first time work .

// console.log('++x', ++x);     // pre increament first time work . 





//Assignment Operator--------------

// let a =5;

// console.log(a+=3);
// console.log(a-=3);
// console.log(a*=3);
// console.log(a/=3);
// console.log(a%=3);
// console.log(a**=3)




//Comperison Opertaor------------------------------

// let a =5;
// let b ='5';

// // ==
// console.log('a == b', a ==b) // retuen true or false

// // !=
// console.log('a != b', a !=b)  // retuen true or false

// // === data type check

// console.log('a === b', a ===b) 

// // !==
// console.log('a !== b', a !==b) 




//LOgical Operators------------------------------------------



// and(&&)------------------------------

// let a = 5;
// let b = 4;

// console.log( a>b && a === 5)

// // Or (||)

// console.log( a>b || a === 9)

// // Not (!)/

// console.log( !(a<b) )



// Conditional Statement-----------------


// if statement------------------------

// const age =23;

// if(age>18){
//     console.log('you can vote')
// }


// let mode = 'dark';
// let color;

// if(mode === 'dark'){
//     color= 'black'
// }

// if(mode === 'light'){
//     color = 'light'
// }
// console.log(color)





// if-else------------------

// let mode = 'dark';
// let color;

// if(mode === 'dark'){
//     color= 'black'
// }else{
//     color = 'light'
// }
// console.log(color)



// check odd or even?--------------------------------

// let check = prompt('enter any number')

// if(check % 2 === 0){
//     console.log(check, 'even')
// }else{
//     console.log(check, "odd")
// }



// Ternary Operators -----------------------------------------

// let age = 39;

// let result = age>18 && age<40 ? 'adult' : 'not adult';

// console.log(result)


// Practice Question ?---------------------------------------

// Qs 1. Get user to input a number using prompt('enter a number'). check if the number is a multiple of 5 or not?

//  let input = prompt ('enter any number');

//  if(input % 5 === 0){
//     console.log(input , ' is multiple of 5')
//  }else{
//     console.log('this number is wrong')
//  }


// Qs 2. Write a code which give grades to student according to their scores? 
//     80-100, A
//     70-79, B
//     60-69, C
//     50-59, D
//     0-49, F

// let grade = prompt ('enter number between 0-100 for grade');
// let result;

// if(grade >= 80 && grade <= 100){
//     result = 'A'
// }else if (grade >= 70 && grade <= 79){
//     result = 'B'
// }else if (grade >= 60 && grade <= 69){
//     result = 'C'
// }else if (grade >= 50 && grade <= 59){
//     result = 'D'
// }else{
//     result = 'F'
// }

// console.log('your result is', result)





// ***************************class three*************************


// loop-----------------------------------------------

// for (let count=0; count <=5; count++ ){
//     // console.log('count')
//     console.log(count)
// }
// console.log('loop has ended')



// Sum 1 to 5 numbers?---------------------

// let sum = 0;

// for (let i=1; i<=5; i++){
//     sum += i
  
// }  console.log(sum)



// sum 1 to n number?------------------------------------

// let sum = 0;
// let n =100;

// for (i=1; i<=n; i++){
//     sum += i
// }
// console.log(sum)


// while loop-----------------------------------

// let i=1;
// while(i<=5){
//     console.log(i)
//     i++
// }


// do-while loop-----------------------------------------

// let i=10;

// do{
//     console.log(i);
//     i++;
// }while(i<=5);



// for-of loop------------------------------------------------------

// let str= 'rahul';


// for (let i of str){
//     console.log(i)
// }




// let size = 0;
// for(let i of str){
//     size++
// }
// console.log(size)


// console.log(str.length);




// for-in loop-----------------------------------------------------
// Object key returns

// let student = {
//     name:'rahul',
//     age:23
// }

// for(let i in student){
//     console.log(i, student[i])
// }



// practiec Questions?----------------------------------------------

// Qs 1. Print all even numbers from 0 to 100?-------------------


// for (let i=1; i<=100; i++){
//    if(i%2 === 0){
//     console.log(i)
//    }
// }


// Qs 2. Create a game where you start with any random game Number. Ask the user to keep guessing the game unmber until the user enters correct value?

// let val =2;
// let i;

  

    // while (i != val){
    //   i = prompt('you enter wrong value');
    // }
    // console.log('congratulation you enterd right number');


    // for (let i=Number(prompt("enter any number")); i!=val; i=Number(prompt('enter wrong number'))
    
    // ){
    // }
    // console.log('congratulation you enterd right number')




    // string--------------------------------------

    // let str = 'string';
    // let str2 = "string two";
    // console.log(str2.length);
    // console.log(str[0])




  // Template Literals---------------------------------
// Special type string. Using by bacties(` `);

// let specialString = `This is templete literals`; 
// console.log(specialString)


// let obj = {
//     item:'pen',
//     price:100
// }
// // console.log(obj.price,obj.item)
// console.log(`${obj.item} ${obj.price} ${1+2+3}`)



// escape character-----------------------------------------------
// let ecsape = 'rahul\nchakraborty'
// console.log(ecsape);
// console.log(ecsape.length)



// tab-space--------------------------------------------
// let space = 'rahul\tchakraborty';
// console.log(space);
// console.log(space.length);





// string method------------------------------------------


// UPPERCase----------------------------

// let str = 'abc';
// let newStr = str.toUpperCase();
// // str = str.toUpperCase();

// console.log(str);
// console.log(newStr);


// LowerCase------------------------------------

// let str = 'ABC';
// str= str.toLowerCase();
// console.log(str)



// trim----------------------------------------
// remove whitespace in string strating and end

// let str = '  rahul chakraborty '

// console.log(str.trim())


// slice------------------------------------

// let str ='01234567';
// console.log(str.slice(1,6)) //end index not count


// concat ----------------------------------------

// let str = 'rahul';
// let str2 = 'chakraborty';

// // console.log(str.concat(str2))
// console.log('i am '+ str+str2)



// Replace-------------------------------------------

// let str = 'hello';

// console.log(str.replace('l', 'r'))

// console.log(str.replaceAll('l', 'r'))



// charAt-----------------------------
// for character find--------------------------

// let str= 'Ilove';

// console.log(str.charAt(3))




// practice Question-------------------------------------

// Qs 1. Prompt the user to enter their full name. Generate a username for them based on Input. Start username with @, followed by their full name and ending with the fullname length?

// eg: user name = 'rahul', output should be '@rahul4'------------------

// let user = prompt('enter your name');

// // let result = ('@'+user + user.length);
// let result = '@'.concat(user,user.length);
// // let result = `@${user}${user.length}`
// console.log(result)





// ********************************Array*********************************************

// let marks = [67,76,79,98,45];
// console.log(marks);
// console.log(marks.length)


// let str =['rahu', 'subho']

// console.log(str)



// array indices---------------------------------

// let arr =  [12,23,19,23];
// console.log(arr[2])
// arr[2] =400;

// console.log(arr)


// array loop-------------------------------------------

// for loop----------------------

// let heros = ['ironman', 'spiderman', 'hulk', 'thor', 'saktiman']

// for (let idx=0; idx<heros.length; idx++){
//     console.log(heros[idx])
 
// }

// for of-----------------------------------

// for(let el of heros){
//     console.log(el)
//     // console.log(el.toUpperCase())
// }
// console.log(heros)



// practice Question?------------------------------------------



// Qs 1. For a given array with marks of student --> [85,97,44,37,76,60] Find the average marks of the student?

// let arr = [85,97,44,37,76,60];
// let sum = 0;
// let result = 0;


// for (let avg of arr) {
//     sum += avg;
//     result = sum/arr.length
// }


// for (let i=0; i<arr.length; i++){
//     sum += arr[i];
//     result = sum/arr.length;
// }
// console.log(result);







// Qs 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer?

// let arr = [250, 645, 300, 900, 50];

// for (let i=0; i<arr.length; i++){
//     arr[i] = arr[i] - (arr[i]/10);
//     console.log(arr[i])
// }
// console.log(arr)

//when we work in array index then we use for loop.

// let i = 0;
// for (let item of arr){
//      arr[i] = item - (item/10)
//    console.log(arr[i]);
//    i++;
// } 
// console.log(arr)

// hear we not use for of loop because for of loop not work at index number and hear we work in same array this cause we want array index number.



// Array methods -----------------------------

// push(): add to end   (return array length)   (work in orginal array)-----------------------------------------

// let lastAdd = ['potato', 'apple', 'mango'];
// console.log(lastAdd.push('lichi','tomato'))   
// console.log(lastAdd)


//pop(): delete to last  (return last delete value) (work in orginal array)---------------------------------------------

// let lastdelete = ['potato', 'apple', 'mango'];
// console.log(lastdelete);
// console.log(lastdelete.pop());
// console.log(lastdelete);


// toString---------------------------------------
// orginal array not modifei new string return

// let lastdelete = ['potato', 'apple', 'mango'];
// let str = lastdelete.toString();
// console.log(str)
// console.log(lastdelete)


// concat---------------------------------------------
// return new array not change orginal array

// let heros = ['spiderman', 'ironman', 'thor'];
// let str2 = ['superman', 'batman'];
// let indain = ['padman', 'saktiman']

// let newarr = heros.concat(str2, indain);

// console.log(newarr);


// unshift() : add in first of array ----------------------------------------------
// return array length (work in orginal array)

// let heros = ['spiderman', 'ironman', 'thor'];
// let newarr = heros.unshift('add');
// console.log(newarr)


// shift(): delete first of array--------------------------

// return deleted value  (work in orginal array)
// let heros = ['spiderman', 'ironman', 'thor'];
// let newarr = heros.shift();
// console.log(newarr)



// slice(): return piece of array. orginal array not change return new array.-----------------------------

// slice(start index, end index)

// let arr = ['apple', 'lichi', 'mango', 'pineapple']; 

// let newarr = arr.slice(1,3);     // last index number not show 
// // let newarr = arr.slice(1); 
// console.log(newarr);
// console.log(arr)






// splice(): return modifei orginal array . not return new array ---------------------------------------
// splice(start index, delet count, newarr)   usfull in array we delete, add, replace using splice all do

// let arr = [1,2,3,4,5,6]; 

// let newarr = arr.splice(1,2,100,200);

// console.log(newarr);
// console.log(arr)

// Add Element----
//  arr.splice(2,0,'rahul')
// console.log(arr)

//Delete Element--------
// arr.splice(2,1);
// console.log(arr)

// REplace Element------
// arr.splice(2,1,12);
// console.log(arr)



// practie Question---------------------
// Qs 1. Creat an array to store companies --> 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'?
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let arr = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// a.
//  arr.shift();
// console.log(arr)


// b
// arr.splice(2,1,'ola');
// console.log(arr)

// c. 
// arr.push('Amazon');
// console.log(arr)


// ***********************************************Function***********************************************

// function myfun (){      //function defination
//     console.log('rahul');
//     console.log('we learn');

// };

// myfun();        //function call
// myfun();



// function myfun (msg, n ){   // parameter --> input
//     console.log(msg,n)
// }
// //function defination variable is called parameter.
// myfun('i love js', 100)  //argument 
// // function call variable is called argument.


// Function --> 2 number sum

// function sum (x,y){
//     console.log(x+y)
// }
// sum(12,3)



// function sum (x,y){     // parameter act as a local variable in function work in only block scope of function.
//     s = x+y;
//     console.log('before return');
//     return s ;
//     console.log('after return');     // after return no work
// }
// let fun = sum(12,3);
// console.log(fun)




// *****************************************Arrow Function*****************************************

// const sum =(a,b)=>{
//     console.log(a+b)
// }
// sum (2,4)


// const multiply = (a,b) =>{
//     console.log(a*b)
// }
// multiply(prompt('first number'),prompt('enter second number'))
// multiply(3,7)




// Practice Question -------------------------------------
//Qs 1. Creat a function using the 'function' keyword that takes a string as an argument & return the number of vowels in the string?

// let count =0;

// function vowel (item) {

//   for (ele of item) {
//     if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u' ){
//       count++
//     }
//   }
// return count; 
// }

// vowel('abchefe');
//  console.log(count)



// Qs 2. Creat a arrow function to perform the same task?


// let count =0;
// const check = ((item) => {
// for  (ele of item) {
//   if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u'){
//     count++;
//   }
// }
// return count;
// })
// check('abcdefa')
// console.log(count)



// What are First Class Function?

// function square(num){
//   return num*num
// }
// function display (fn){
//   console.log("square is" + fn(5))
// }
// display(square)






// **************************************Array callBack Method **************************************



// ForEach------------------------------------

// arr.ForEach(callBackFunction) 

// let arr = ['pune','delhi'];

// arr.forEach(function print (value){    //forEach return each element in array
//   console.log(value)
// });

// arr.forEach((ele) =>{
//   console.log(ele);
//   console.log(ele.toUpperCase())
// }
// )



//Practice Question------------------------------------
//Qs 1. For a given array of numbers, print the square of each value using the forEach loop?

// let arr = [2,3,4,5,6,];

// arr.forEach((ele) =>{
//  console.log(ele*ele) //ele**2
// })

// another way----------------(callBack)
// let calculate = (ele) =>{
//   console.log(ele*ele);
// };
// arr.forEach(calculate);




// map-------------------------------------(Return New array)-----------------

// let num = [12,34,56];

// let newarr = num.map((item) =>{
//   return item*2
// })

// console.log(newarr)




// filter-------------------------------------(Return New array)-----------------

// let num =[1,2,3,4,5,6,7,8,9,12,23,45,67,7676,68,997];


// let newarr = num.filter((ele) =>{
//   // return (  ele % 2 === 0  )
//   // return (  ele % 2 !== 0  )
//   return (  ele >= 3 )
// })
// console.log(newarr)



// reduce-------------------------------------(Return New array)-----------------

// sum------------------
// let arr = [1,2,4,5,7];

// let newarr = arr.reduce((a,e) =>{
//       return a+e;
// })
// console.log(newarr)



// largest element -------------------

// let arr =[12,203,54,67,4];

// let newarr = arr.reduce((a,e) =>{
//   //  return a > e ? a : e

//   if (a > e){
//     return a;
//   }else{
//     return e;
//   }
// })
// console.log(newarr)


//smalles number-------------

// let newarr = arr.reduce((a,e) =>{
//   return a < e ? a : e;
// })
// console.log(newarr)



// avarge ----------------

// let newarr = arr.reduce((a,e) =>{
//   return  a+e;
// })
// let average = newarr/arr.length;
// console.log(average)S




// Practice Question-------------------------------------

// Qs 1. we are given array of marks of student. Filter out of the student that scored 90+?----------------------
// [87,89,64,99,93]

// let arr = [87,89,64,99,93,100];

// let newarr = arr.filter((e) =>{
//   // return e>=90 ? e : null ;
//   return e>90;
// })
// console.log(newarr)



// Qs 2.  Take a number n as input from user. Creat an array of numbers from 1 to n. 
// Use the reduce method to calculate sum of all numbers in the array. 
// Use reduce method to calculate product of all numbers in the array.


// let n = prompt('enter a number');

// let arr =[]

// for (let i=1; i<=n; i++){
//       arr [i-1]= i;
// }
// console.log(arr)

// // sum----------
// let sum = arr.reduce((a,e) =>{
//   return a+e;
// })
// console.log(sum)

// // produce/factorial----------------
// let product = arr.reduce((a,e) =>{
//   return a*e;
// })
// console.log(product)




// ******************************************Dom******************************************


// alert('are you sure');
// console.log(window)

// console.log('hello');
// window.console.log('hello2');   //console.log is part of window object

// console.log(document.body);
// console.dir(document.body);

// console.dir(document.body.childNodes[1])

// Dom selection with ID------------------- 
// let headings = document.getElementsByClassName('head');
// console.dir(headings);
// console.log(headings);

// Dom selection with querySelector-------------------  1st element return
// tag---
// let firstt = document.querySelector('p');
// console.dir(firstt);

// class---
// let firstt = document.querySelector('.head');
// console.dir(firstt);

// id---
// let firstt = document.querySelector('#myid');
// console.dir(firstt);


// Dom selection with querySelectorAll-------------------
// tag----------------
// let all = document.querySelectorAll('p');
// console.dir(all);

// class---------------
// let all = document.querySelectorAll('.head');
// console.dir(all);


// practice -------------
// Qs 1. Creat a H2 heading element with text - "Hello Javascript". Append "from apna college student" to this text using JS. 

// let upadtee = document.querySelector('h2');

// upadtee =`${upadtee.innerText} from apna college student`;
// console.log(upadtee)




// Qs 2. Creat 3 dives with common class name - 'box'. Acess them & add some unique text to each of them?

//  let newtext = document.querySelectorAll('.box');

//  newtext[0].innerText = 'this is 1';
//  newtext[1].innerText = 'this is 2';
//  newtext[2].innerText = 'this is 3';

//  one = `${newtext[0].innerText} this is first`;
//  second = `${newtext[1].innerText} this is second`;
//  third = `${newtext[2].innerText} this is third`;
//  console.log(`${one} ${second} ${third}`);


// with loop--------------------------(this way we use)

// let idx = 1;
// for (div of newtext){
//   // console.log(div.innerText);
//   div.innerText = `new unique value ${idx}`;
//   idx++
// }




// Attribute-----------------------------------

// for get attribute----------
// let div = document.querySelector('div')
// console.log(div);

// let id = div.getAttribute('class');
// console.log(id);

// let name = div.getAttribute('name');
// console.log(name);

// let clas = document.querySelector('p');
// console.log(clas)
// let classs =  clas.getAttribute('class');
// console.log(classs);
// console.log(clas.setAttribute('class','newclas'));



// Add-----------------------------------
// let newBtn = document.createElement('button');
// newBtn.innerText = 'click me';
// console.log(newBtn);

// add last----
// let div = document.querySelector('#div1');
// div.append(newBtn);

// add first----------
// div.prepend(newBtn);

// add first before div----------
// div.before(newBtn);


// add last after div----------
// div.after(newBtn);



// delete-------------
// let para = document.querySelector('#p1');
// para.remove();
// newBtn.remove();





// practics Question----------------------

// Qs 1. Creat a new button element. Give it a text "click me", brackground color of red & text color of white?

// let add = document.createElement('button');
// add.innerText = 'click me';
// add.style.backgroundColor = 'red';
// add.style.color = 'white';
// console.log(add);

// let bodyy = document.querySelector('body');
// bodyy.append(add)



// Qs 2. Creat a <p> tag in html, give it a class & some styling. 
// Now creat a new class in css and to append this class to <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

// let para = document.querySelector('.content');
// para.classList.add('newClass');
// para.classList.remove('newClass');



// Events------------------------------

// let btn1 = document.querySelector('#btn1');


// btn1.onclick = () =>{
//   console.log('this button is clicked');
//   let a = 20;
//   a++;
//   console.log(a)
// }

// let div  = document.querySelector('div');
// div.onmouseover = () =>{
//   console.log('you are inside div')
// }


// event object----------------------------

// btn1.onclick = (evt) =>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY)     // for position
// }

// let div  = document.querySelector('div');
// div.onmouseover = (evt) =>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target)
// }

// event-Listener--------  (EventListener use beacuse for multiple work in same event )
// add------
// btn1.addEventListener('click', (evt)=>{
//   console.log('handler1');
//   console.log(evt);
//   console.log(evt.type)
// })
// btn1.addEventListener('click', ()=>{
//   console.log('handler2')
// })



// remove------
// btn1.addEventListener('click', ()=>{
//   console.log('handler1')
// })

// const handler2 = ()=>{
//   console.log('handler2')
// }
// btn1.addEventListener('click', handler2)

// btn1.addEventListener('click', ()=>{
//   console.log('handler3')
// })


// btn1.removeEventListener('click', handler2 )      //when we remove then first we add this in variable after we process.



// Practics----------------------------
// Qs 1. Creat a toggle button that changes the screen to dark-mode when clicked & light-mode when click again?

// let btn = document.querySelector('#btn');

// let body = document.querySelector('body');

// let currentMode = "light";

// btn.addEventListener('click', () =>{
//   if(currentMode === "light"){
//     currentMode = 'dark';
//   //  body.style.backgroundColor = 'black';
//   body.classList.add('dark');
//   body.classList.remove('light')

//   }else{
//     currentMode = "light";
//     body.classList.add('light')
//   }
//   console.log(currentMode)
// } )


// practics------------

// let div = document.querySelector('#div1');
// let current = 'blue';
// let body = document.querySelector('#div1');

// div.addEventListener('mouseover', () =>{
//   if(current === 'blue'){
//     current = 'black';
//     body.style.backgroundColor = 'black';
//   }else{
//     body.style.backgroundColor = 'blue';
//     current = 'blue'
//   }
//   console.log(current);
// } )






// *************************************************IMPORTANT****************************************************
// nonprimitive is object 

// let arr =[];
// console.log(typeof(arr))    //output is object.  we can dainamically add data/properties both array and object.

// function fun (){};


// console.log(typeof(fun))    //this is type is function but when we add value as object this cause we said non-primitive and in javascript is everything is object.


// fun.addvalue = "this is a object type";

// console.log(fun.addvalue);







