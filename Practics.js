// let obj ={
//     radious :10,
//     result : function(){
//        return (Math.PI*this.radious*this.radious)
//     }
// }
// console.log(obj.result())

// sum---------------------------------------------
// function sum(a,b){
//     return a+b 
// }
// let result = sum(4,9);
// console.log(result)

// length------------------------------------
// function leng(str){
//     return str.split(' ').join('').length
// }
// console.log(leng("rahul cha"));

// largest-----------------------------------------------
// let arr = [2,2,3,45,67,456,32,13];

// function large (arr){
//     return Math.max(...arr)
// }
// console.log(large(arr))

// function large(arr){
//     let max = arr[0];
//    for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//    } 
//    return max;
// }
// console.log(large(arr))


// 4---------------------------------------
// let str = "rahuuull";
// let n ="u"
// let count=0;

// function occuerence(str){
//     for(key of str){
//         if(key === n){
//             count++
//         }
//     }
//     return (`${n} = ${count}`);
// }
// console.log(occuerence(str))



// 5---------------------------------------------

// let num = parseInt(prompt("enter a number for check positive"));

// function numcheck(num){
//     if(num >=1){
//         return "positive number"
//     }else if(num == 0){
//         return "natural number"
//     }else{
//         return "negative number"
//     }
// }
// console.log(numcheck(num));



// 6------------------------------------------------

// let arr = ["rhaul chakraborty"];
// function check(arr){
//     let newarr = arr.map((ele,ind) =>{
//     return ele.toUpperCase()
// })
// return newarr;
// }
// console.log(check(arr))


// 7--------------------------------------------------------------

// let str =prompt("enter string for check vowel");
// function vowel(str){
//     if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u" ){
//     console.log(true)
// }else{
//     console.log(false)
// }
// }
// vowel(str)



// 8--------------------------------

// let arr =[1,2,3,4,45,67,78,67,2];

// let newarr = arr.filter((ele,ind) =>{
//     return arr.indexOf(ele) === ind
// })
// console.log(newarr)


// 9---------------------------------------------
// let str= "gg123k@.com";
// // let newarr = str.includes("@") && str.includes(".com");
// let newarr = /@.*\.com/.test(str);
// console.log(newarr)


// 10-----------------------------------------
// let arr = ["rahul"];
// let arr2 = ["chakraborty"];
// let result =[]
// function newarr(arr,arr2){
//     // return result= arr.concat(arr2)
//     return [...arr, ...arr2]
// }
// console.log(newarr(arr,arr2))


// 11-------------------------------------------------------

// let n =7;
// let factorial = 1;

// for(let i=1; i<=n; i++){
//    factorial *=i;
// }
// console.log(factorial)



// 12-------------------------------------------------------

// let arr =[1,2,3,4,5];
// let res =[];

// function sum(arr){
// let newarr = arr.reduce((acc,ele,ind) => acc+ele);
// res.push(newarr)
// //  let summ =0;
// // for(let key of arr){
// //     summ += key;
// // }
// // newarr.push(summ)

// }
// sum(arr)
// console.log(res)



// 13--------------------------------------------------------
// let str ="rahul";

// function reverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverse(str))



// 14---------------------------------------------------------------

// let arr = ["rahul", "chakraborty", "subjahit"];
// let maxlength = 0;
// let largest = ""

// function longest(arr){
//     for(key of arr){
//         if(key.length>maxlength){
//             maxlength = key.length;
//             largest = key
//         }   
//     }
//     return [ largest]
// }
// console.log(longest(arr))




// 15-------------------------------------------------------------------

// let num =Number(prompt("enter a number"));

// function prime(num){
//  if(num === 1){
//     console.log("not prime number")
//  }else{
//     let isprime =true;
//     for(let i=2; i<num; i++){
//         if(num%i===0){
//             isprime =false
//         }
//     }

//     if(isprime){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
//  }
// }
// prime(num)






// 16----------------------------------------

// let str ="i am rahul am chakraborty";
// // count = 0;

// function fun(fun){
//     let obj ={};
//     let split = fun.split("");
//     for(key of split){
//         if(key !=' '){

//             if(obj[key] === undefined){
//         obj[key] = 0;
//       }
//       obj[key] = obj[key] + 1;

//         }
//     }
//     return obj
// }
// console.log(fun(str));



// 17-------------------------------------------------

// let num =[1,2,23,3,45,5,655,5,56,12];

// function numsort(num){
//     return num.sort((a,b) => a-b)
// }
// console.log(numsort(num));



// 18--------------------------------------------------------
// let str ="raheiouule";
// let count =0;
// let character ="";

// function vowel(str){
//     for(key of str){
//         if(key === "a" || key === "e" || key === "i" || key === "o" || key === "u"){
//             count++;
//             character += key
//         }
//     }
//     return {character,count}
// }
// console.log(vowel(str));




// 19-------------------------------------------------------------------

// let arr =["rahulabxa"];
// function alpsort(arr){
//   return  arr.map((ele, ind) => ele.split('').sort().join('') )
// // return arr[0].split('').sort().join('')
// }
// console.log(alpsort(arr));




// 20----------------------------------------------------------------------------
// let n=19;
// let num =[];

// function fun(n){
//     for(let i=1; i<=n; i++){
//         if(i%3===0 && i % 5 ===0){
//             num.push("FizzBuzz")
//         }else if(i%5===0){
//             num[i] = "Buzz"
//         }else if(i%3===0){
//             num[i] = "Fizz"
//         }else{
//             num[i] = i
//         }
//         // num.push(i);
//     }
//     return num
// }
// console.log(fun(n))





// javaScript Lohic Question------------------------------------------

// 1--------------------------------------------------
// let arr = [1,2,3,4,6,7,8,12,34,45,43,32];
// let result = 0;;

// function sum (arr){
// for(key of arr){
//     if(key%2==0){
//         result+= key
//     }
// }
// return result
// }
// console.log(sum(arr))



// 2----------------------------------------------------
// let str ="rahul";
// function reversestr(str){
//     return str.split('').reverse().join('')
// }
// console.log(reversestr(str))




// 3---------------------------------------------------

// let num = Number(prompt("enter a number"));
// function prime(num){
//     let isprime =true;
//     if(num===1){
//         isprime = false
//     }else{
//         for(let i=2; i<num; i++){
//             if(num%i===0){
//                     isprime=false
//             }
//         }
//     }
//     if(isprime){
//             console.log(true)
//         }else{
//             console.log(false)
//         }
// }
// console.log(prime(num))



// 4-----------------------------------------

// let arr = [1,2,3,9,10];
// let arr2 = [3,4,5,6,7,8,9,10];

// function newarr(arr,arr2){
//     let marge = [...arr,...arr2];
    
//   return  marge.filter((ele,ind) => marge.indexOf(ele) !== ind )
// }

// console.log(newarr(arr,arr2))




// 5---------------------------------------------------
// let sentense = "rahul, chakraborty, rahulchakraborty";
// let large = "";
// let maxlen = 0;

// function longest(sentense){
//    for(key of sentense.split(" ")){
//     if(key.length > maxlen){
//         maxlen = key.length;
//         large = key
//     }
//    }
//    return [large, maxlen]
// }
// console.log(longest(sentense))



// 6---------------------------------------
// let str ="rAhuul";

// function vowel(str){
//     // let store = str.split("");
//    str = str.toLowerCase()
//     let count =0 ;
//     let store =""
//     for(key of str){
//         if(key === "a" || key === "e" || key === "i" || key === "o" || key === "u"){
//                 count++;
//                 store +=key

//         }
//     }
//     return [count, store]
// }
// console.log(vowel(str))




// 7--------------------------------------------------
// let arr =["rahulchakraborty"];
// // let newarr =[]

// function alpha(arr){
// //    let store =  arr[0].split("").sort().join('');
// //     newarr.push(store)
// //     return newarr

// return arr.map((ele,ind) => ele.split("").sort().join())

// }

// console.log(alpha(arr))




// 8-----------------------------------------------------------
// let n =17;

// function num (n){
//     let coun =[]
//     for(let i=1; i<=n; i++){
//        if(i%3===0 && i%5===0){
//         coun[i] = "FuzzBuzz";
//        }else if (i%5===0){
//         coun[i] = "Buzz";
//        }else if(i%3 ===0){
//         coun[i] = "Fuzz"
//        }else{
//         coun[i]= i
//        }
//     }
//     return coun
    
// }
// console.log(num(n))




// 9-------------------------------------------------------
// let arr = [12,34,56,54,23,11];

// function smallest (arr){
//     let first = Math.max(...arr);
//     let ind = arr.indexOf(first);
//     arr.splice(ind,1);
//     let second  = Math.max(...arr);
//     return second;
// }

// console.log(smallest(arr))




// 10-----------------------------------------
// let str = ["rarh"];

// function fun (str){
//     str = str.toString()
//     let store = str.split("").reverse().join("");
//     if(str === store){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
//     return store
// }

// fun(str)


// callBack-----------------------------------------
// function show(a){
//    console.log("i am" + a)
// }
// function greeky (callback){
//     callback(121)
// }
// greeky(show);


// uniq Array------------------------------------------------
// let arr = [2,3,1,6,3,6,2];
// let newar =arr.filter((ele,ind) =>{
//     return arr.indexOf(ele) === arr.lastIndexOf(ele)
// })
// console.log(newar);



// let m =[2,6,8,5,4,3];
// let n = [2,3,4,7];
// let newarr= m.concat(n);
// let result = newarr.filter((ele,ind) =>{
//     return newarr.indexOf(ele) !== ind;
// })
// console.log(result)




// let input = "this is a sample string";
// let store = input.split(" ");
// let count = 0;
// for (key of store){
//     count++
// }
// console.log(count)


// for(var i=1; i<=10; i++){
//     setTimeout(() =>{
//         console.log(i);
//     },1000*i)
// }


// function main(a, b = main(7,8) ){
//     return a+b ;
// }
// console.log(main(3));


// let x =5;
// let y = 7;
// console.log(`${x*y}`);
// console.log(`rahul          
// cha`)                               // next line support;



// let arr =[12,30,23,34,44];
// let newarr = arr.find((ele,ind) =>{
//     return ele>35
// })
// console.log(newarr)
// let daat =[
//     {id:12, name:"a"},
//     {id:32, name:"b"},
//     {id:42, name:"c"},
//     {id:62, name:"d"},
//     {id:82, name:"e"},
// ];
// let newdata = daat.find((ele) => ele.name == "d" )
// console.log(newdata)


// let arr =[2,4,5,8];
//  arr.forEach((ele,ind) => arr[ind] = ele*2);
// console.log(arr);


// class Frutes{
//     name = "apple";

//     constructor(){
//         // console.log(this.name)
//     }
//     ornage (){
//         console.log("fun")
//     }
// }
// let apple = new Frutes;
// console.log(apple.name)
// apple.ornage()
// console.log(applo e pe)



// let a = undefined;

// setTimeout(() =>{
//     a="rahul";
// },1000);
// console.log(a)


// let prom = new Promise((resolve, reject) =>{
//     // let a = undefined;
//     setTimeout(() =>{
//         a="hello js";
//         resolve("done");
//         // reject("error")
//     },1000)
// })


// prom.then(()=>{
//     console.log(a)
// })


// console.log(isFinite('56'));
// console.log(isNaN('gh'))



// var rahul = ['rahul', '23', ' kolkata',  '741123'];
// var [name,age,add,pin,newar="unnon"] = rahul;
// console.log(newar);

// let aar = ["rahul", "chakraborty"];
// // function store(...a){
// //     return a
// // }
// // console.log(store(...aar))
// let newar = [...aar];
// newar.push("test")
// console.log(newar);
// console.log(aar)



// console.log(3**3);
// console.log(2**3**2)



// let arr = [1,2,3,4,5];
// console.log(arr.includes(3))
// console.log(arr.find((ele) => ele==4))

// let user =[
//     {
//         id:1,
//         name:"rahul"
//     },
//     {
//         id:2,
//         name:"sanjit"
//     },
//     {
//         id:3,
//         name:"subha"
//     }
// ];

// const isname= (name, user) =>{
//     let exits = false;
//     for(let i=0; i<user.length; i++){
//         if(user[i].name === name){
//             exits = true;
//         }
//     }
//     return exits
// }
// console.log(isname("ra", user))

// let newarr = (name,user)=>{ 
//      let store=  user.find((ele) => ele.name === name) ;
//      return Boolean (store)
//      }
// console.log(newarr("rahul", user))

// let newarr = (name,user)=>{ return  user.some((ele) => ele.name === name)  }
// console.log(newarr("rahul", user));

// user.push({id:5,name:"cha"});
// console.log(user)


// let arr = [1,2,3,4];
// const append = (arr,ele) =>{
//  return   [...arr,ele];

//     // arr.push(ele);
//     // return arr
// }
// console.log(append(arr,6));
// console.log(arr);


// let arr =[1,2,3,4,5,2,3,6,7,5,8];
// level-0---------------------------------------
// function uniq(arr){
//     let uniqelelement =[];
//     arr.forEach((ele) =>{
//         if(!uniqelelement.includes(ele)){
//             uniqelelement.push(ele)
//         }
//     })
//     return uniqelelement
// }
// console.log(uniq(arr));
// console.log(arr)



// level-1------------------------------------------------
// function newar (arr){
//     return [...new Set(arr)]
// }
// console.log(newar(arr))
// console.log(arr);


// level-2------------------------------------------------
// const uniqar =(arr) =>{
//     return arr.reduce((acc,ele) =>{
//         return acc.includes(ele) ? acc : [...acc,ele]
//     },[])
// }
// console.log(uniqar(arr))


// let newarr = arr.filter((ele,ind) =>{
//     return arr.indexOf(ele) === ind;
// });
// console.log(newarr);


// let arr =[1,2,3,4];
// let arr2 = [2,3,5,6,7];
// function marge(arr,arr2){
//     return arr.concat(...arr2);
//     // return [...arr,...arr2]

//     // arr.push(...arr2);
//     // return arr
// }
// console.log(marge(arr,arr2));
// console.log(arr)


// function outer (){
//     let outervar=  "i am rahul";
//     function inner(){
//         console.log(outervar)
//     }
//     outervar = "chakraborty";
//     return inner;
//     // inner()
// }
// // outer()
// let resultfun = outer();
// resultfun();

// function x(){
//     var a =8;
//     function y (){
//         console.log(a);
//     }
//     // a=6
//     y()
// }
// x()



// function add(a,b){
//     return a+b
// }

// function divided(a,b){
//     return a/b
// }

// function calculate(a,b, operation){
//     return operation(a,b)
// }
// console.log(calculate(2,4,add));







// interview question---------------------------------------
// 1.
// let a =[];
// let b =[];
// console.log(a==b);  //false
// console.log(a===b);  //false
// // because when we compare array then this compare memory location this cause false.


// 2.
// let a =[];
// let b =a;
// console.log(a==b);  //true
// console.log(a===b); //true


// 3.
// let a = [20];
// let b =[20];
// console.log(a[0] == b[0]);  //true
// console.log(a[0] === b[0]);  //true
// hear true because not compare the memory location compare value of array.



// 4.
// let z =[1,2,3,4];
// console.log(...z);


// 5.
// console.log(typeof NaN)     //number

// 6.
// let data = 10 - - 10;
// console.log(data)

// 7.
// let arr = [1,2,3,4,1,5];
// let newar = new Set(arr);
// console.log(newar);

// let newarr = arr.filter((ele,ind) =>{
//    return arr.indexOf(ele) === ind;
// });
// console.log(newarr);



// 8.
// let data = {name:"rahul", age:23};
// console.log(delete data.name);       //true
// console.log(data)


// 9.
// let data = {name:"rahul"};
// console.log(delete data);       //false
// console.log(data)

// 10.
// let daat = ["rahul", "cha", "sam"];
// // let [y] = daat;        // first element
// let [,y] = daat;        //second element
// // console.log(y);
// console.log(y);

// 11.
// let data ={name:"rahul", age:23, skill:"js"};
// // console.log(data["skill"]);
// let {name} = data;
// console.log(name);


// 12.
// let data = {name:"rahul", age:23, skill:"js"};
// let info ={ city:"knj", mail:"rc212861@gmail.com"};
// let res = {...data,...info};
// console.log(res);


// 13.
// let data = {name:"rahul", age:23, skill:"js"};
// let info ={ city:"knj", skill:"react"};
// data = {...data, ...info};
// console.log(data);



// 14.
// let res = false || {} || null;
// console.log(res);
// if({}){
//     console.log("yes");
// }

// 15.
// let result  ={} || 0 || "";
// console.log(result);



// 16.
// console.log(Promise.resolve(23));


// 17.
// let a  = "rahul";
// function getna(){
//     console.log(a)
// }
// getna()


// 18.
// let name = "rahul";
// console.log(!typeof name === "object");
// console.log(!typeof name === "string")


// 19.
// let name = "rahul";
// let age =23;
// console.log(isNaN(name));
// console.log(isNaN(age));




// 20.
// let per ={
//     name:"rahul",
//     age:23
// }
// // Object.freeze(per)
// per.city="knj";
// console.log(per);


// 21.
// let arr = [1,2,3,4];
// // arr.shift();
// arr.splice(0,1)
// console.log(arr);



// 22.
// let arr =[12,3,4,5];
// arr.pop();
// console.log(arr);


// 23.
// let a =Number(prompt("enter a number"));
// if(a%2===0){
//     console.log(`${a} is a even number`)
// }else{
//     console.log(`${a} is odd number`)
// };



// 24.
// let data={
//     name:"rahul"
// }
// delete data.name;
// console.log(data);



// 25.
// let data ="true";
// console.log(typeof(!data));
// console.log(!data);



// 26.
// let a=1;
// let c =2;
// console.log(++a === c);





// 27.
// let a =1;
// let b =1;
// let c =2;
// console.log(a === b === --c)        //because hear we compare --c means number and a===b means boolen(true).




// 28.
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name = "apple";
//     let price = 45
// }
// fruit();



// 29.
// for(let i=1; i<=10; i++){
//     setTimeout(() =>{
//         console.log(i)
//     },1000*i)
// }




// 30.
// console.log(typeof( "anil"));




// 31.
// let data = "size";
// let bord ={
//     size:"small"
// };
// console.log(bord[data]);
// console.log(bord["size"]);
// console.log(bord.data);
// console.log(bord.size);



// 32.
// function fruit(){
//     console.log("wolf");
//     console.log(fruit.namee)
// }
// fruit.namee = "apple";
// fruit()




// 33.
// let sum = eval('10');       //eval convert string to number
// console.log(sum)




// 34.
// for(let i =1; i<=5; i++){
//     if(i === 3) 
//      continue
//     console.log(i)
// }




// 35.
// let num = [1,2,3];
// num[9] = num;
// console.log(num);


// 36.
// let a = 3+4+"5";
// console.log(typeof a);       //string





// 37.
// console.log(typeof 3 + 4 + '5') //number




// 38.
// console.log(typeof (3+4+ +'5'));






// 39.
// function getdata(member){
//     return member.name = "anil"
// }
// let person = {name:"rahul"};
// getdata(person);
// console.log(person);







// JavaScript logical question---------------------------------

// 1. Given a string, reverse each word in the sentence?
// let str ="rahul cha reactjs";
// // let res = str.split("").reverse().join("");
// // console.log(res);
// let result = str.split(" ").map((word) =>{
//   return  word.split("").reverse().join("")
// });
// console.log(result.join(' '))


// 2. How to check if an object is an array or not provide some code?
// function  check (ele){
//     return Array.isArray(ele)
// }
// console.log(check({}));
// console.log(check([]));




// 3. How to empty an array in JavaScript?
// let arr =[1,2,3,4,5];
// // arr = [];
// arr.length =0;
// console.log(arr);




// 4. How would you check if a number is an integer?
// let a =7.0;
// if(typeof(a) === "number"){
//     if(a%1===0){
//         console.log("integer")
//     }else{
//         console.log("not inte")
//     }
// }else{
//     console.log("not number")
// };



// 5.Make a duplicat?
// let ar = [1,2,3,4,5];
// let arr =[];
// function  duplicate(ar){
//     // return  arr = [...ar,...ar];
//     return ar.concat(ar)
// }
// // let arr = [...ar,...ar];
// console.log(duplicate(ar));





// function question ------------------------------------
// 6.Write a function that reverse a number ?

// let num =45223;
// // num  = num.toString();
// // function rever(num){
// //     return Number(num.split("").reverse().join(""))
// // }
// // console.log(rever(num));

// let rev = 0;
// while(num>0){
//     let rem = num%10;
//     rev = rev *10+rem;
//     num = Math.floor(num/10);
// }
// console.log(rev);



// 7. Write  a javaScript function that checks whether a passed string is palindrome or not?
// let str ="rar";
// let store = str.split('').reverse().join("");
// if(str === store){
//     console.log(`${str} is a palindrom string`)
// }else{
//     console.log("not palindrom")
// };




// 8. Write a JavaScript function that returns a passed string with letters in alphabetical order?
// let str = "rzahaxbgh";
// function rev(str){
//     return str.split('').sort().join("");
// }
// console.log(rev(str));




// 9.Write a JavaScript function that accepts a string as a parameter and converts the first letter each word of the string in upper case?
// let str = "rahul know javascript and html css";
// let store = str.split(" ").map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1));
// console.log(store.join(' '));




// 10.Wriet a JavaScript Function to get  the number of occuerence of each letter in specific string?
// let str = "apple apl";
// function occ(str){
//     let obj ={};
//     let chat  = '';
//     let maxcount = 0;
//     str.split("").forEach((ele,ind) =>{
//         if(ele != ' '){
//              if(obj.hasOwnProperty(ele) === false){
//                 obj[ele] = 1;
//             }else{
//                 obj[ele]++
//             }
//             // if(obj[ele] > maxcount){         //for highest occurence
//             //     chat = ele;
//             //     maxcount= obj[ele]
//             // }
//         }   
//     })
//     return obj
// }
// console.log(occ(str));




// 11.Write a JavaScript function which accepts an arguments and returns the type.

// function check (arg) {
//     return typeof(arg)
// }
// // let exa = "";
// // exa = {};
// // exa = [];
// // exa = 7;
// let exa ;
// exa =true;
// exa  = function(){}
// console.log(check(exa))






// loops-----------------------------------------------

// 12.Loop an array and add all members of it?
// let arr =[1,2,3,4,5,6,7,8];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//         sum += arr[i];
// } 
// for(key of arr){
//     sum += key
// }
// arr.forEach((ele) => sum += ele);
// let res = arr.reduce((acc,ele) => acc+ele);
// console.log(res);
// console.log(sum);






// 13.In array of number and strings, only add those members which are not string?
// let num = [4,"rahul", 9, "js"];
// let res = 0;
// for(key of num){
//     if(typeof(key) === "number"){
//         res+= key
//     }
// }
// console.log(res);
// let result = num.filter((ele) => {
//     if(typeof(ele) === "number"){
//         res += ele;
//     }
// })
// console.log(res);






// // 14.Loop an array of objects and remove all object which don't have gender's value male?
// let arr = [
//     {name:"rahul", gender:"male"},
//     {name:"riya", gender:"female"},
//     {name:"tonu", gender:"female"},
//     {name:"pallabi", gender:"female"},
//     {name:"sanjit", gender:"male"},
// ];

// let res = arr.filter((ele) =>{
//     return ele.gender=="male"
// });
// console.log(res);

// for(let i=0; i<arr.length; i++){
//     if(arr[i].gender !== "male"){
//         arr.splice(i,1);
//         i--
//     }
// }
// console.log(arr)





// 15.Write a JavaScript function to clone an array?

// function exam(arr){
// // return [...arr];

// // let newarr =[]
// // arr.forEach((ele) => newarr.push(ele));
// // return newarr;

// return arr.map((ele) =>{
//     return ele;
// })
// }
// let arr = [1,2,3,4,5,6];
// // let result = exam(arr);
// // result.pop();
// // console.log(result);
// // console.log(arr);
// console.log(exam(arr));




// 16.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array ?

// let arr = [2,3,4,5,7];
// function input(arg,n){
//   if(n<=arr.length){
//     for(let i=0; i<n; i++){
//         console.log(arg[i])
//     }
//   }else{
//     console.log("not elements hear")
//   }
// }
// console.log(input(arr,3));





// 17.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the first 'n' elements of the array ?


// function lastt(arr,n){
// if(n<=arr.length){
//     for(let i=0; i<n; i++){
//         console.log(arr.length-1-i)
//     }
// }else{
//     console.log("not element")
// }
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(lastt(arr,4));






// 18.Write a javascript progran to find the most frequent item of an array?
// let arr = [1,2,3,4,5,6,2,8,2,4];
// function check(arr){
//     let obj = {};
//     let count =0;
//     let char ="";
// arr.forEach((ele) =>{
//     if(obj.hasOwnProperty(ele) === false){
//         obj[ele] = 1;
//     }else{
//         obj[ele]++
//     }
//     if(obj[ele] > count){
//         count = obj[ele];
//         char = ele;
//     }
// })
// // return obj;
// return [char,count]
// }
// console.log(check(arr));





// 19.Write a JavaScript program to shuffle an array?
// function shuffle(arr){
//    for(let i=arr.length-1; i>0; i--){
//     let j = Math.floor(Math.random() *(i+1));
//    [ arr[i], arr[j]] = [arr[j] , arr[i]]
//    }
//    return arr
// }
// let arr = [1,2,3,4,5,6,7]
// console.log(shuffle(arr));




// 20. Write a JavaScript program to compute the union of two arrays ?
// let arr = [1,2,3];
// let arr2 =[100,2,1,10];
// // let res = [...new Set(arr.concat(arr2))];
// // console.log(res);
// function check (arr,arr2){
//     let newarr = [...arr, ...arr2];
// let store = newarr.sort((a,b) => a-b)
// let result = store.filter((ele,ind) =>{
//     return newarr.indexOf(ele) === ind;
// })
// return result
// }
// console.log(check(arr,arr2));





// let arr = [1,2,3,4,5,2,6,1,7,8,9];
// arr.splice(3,arr.length);
// length fix-----------------------------------
// arr.length =4
// console.log(arr)

// sum-------------------------------------
// let res = arr.reduce((acc,ele) => acc+ele);
// console.log(res);

// let sum = 0;
// for(key of arr){
//     sum+=key
// };
// console.log(sum);


// duplicate--------------------------------

// let newarr = [...new Set(arr)];
// console.log(newarr);


// let x =4;
// x = (x,7);          //coma assign value in right side
// console.log(x);


// swip--------------------------------
// let x=20, y=30;
// // a=x;
// // x=y
// // y=a

// [x,y] = [y,x]
// console.log(x);



// function mul(a){
//     return function (b){
//         return a*b;
//     }
// }
// // let double = mul(2);
// // console.log(double(4));

// let res = mul (2)(6);
// console.log(res);



// let arr = [4,8,10,9,5];
// let arr2 = [5,10,8,9,4];


// if(arr.length === arr2.length){
//    let result = arr.every((ele,ind) => arr2.includes(ele));
//    if(result){
//     console.log("array are same")
//    }else{
//     console.log("array are not same")
//    }
// }else{
//     console.log("array lengt not same")
// }

// console.log(res2);



// 1.Check whether all the digit in given number are the same or not?
// let num =11111;
// num = num.toString()
// let store  = num.split('');
// let res = store.every((ele) =>ele === store[0]);
// console.log(res);




// 2.Count the each character occurence of string?
// let str = "rahulcha";
// function occure(str){
//     str = str.split('');
//     let obj ={}
//  str.forEach((ele,ind) =>{
//         if(obj.hasOwnProperty(ele) === false){
//             obj[ele] = 1
//         }else{
//             obj[ele]++
//         }
// })
// return obj
// };
// console.log(occure(str));



// 3.largest difference between two number of array?
// function diff(arr){
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let res = max-min;
//     return res
// }
// let arr = [6,8,9,12,21]
// console.log(diff(arr));




// 4.Krishnamurty Number?

// let n  =6;
// let result =1;
// for(let i=1; i<=n; i++){
//         result*=i;
// }
// console.log(result)


// 5.longest word in string?

// let str = "rahul chakraborty is js lernfer";
// function check(str){
//     let store  = str.split(" ");
//     let count = 0;
//     let char = "";
//     for(key of store){
//         if(key.length > count){
//             count = key.length;
//             char  =key;
//         }
//     }
//     return (`${char} ${count}`)
// }
// console.log(check(str));




// 6.sum of array?
// let arr = [1,2,478,[15,[23,40],[5,12,67]],[100,389],756];
// let store =arr.flat(Infinity);
// let res = store.reduce((acc,ele) => acc+ele);
// console.log(res);



// 7.
// const arr=[
//     {
//     user:"usreA",
//     price:[456.78,564.23,400]
//     },
//     {
//         user:"usreB",
//         price:[654.22,124,225]
//         },
//     {
//         user:"usreC",
//         price:[332.02,224,500]
//     }
// ];

// let a =[];
// for(key of arr){
// let total = 0;
//     for(price of key.price){
//             total += price
//     };
//     if(total >1000){
//         a.push(key.user)
//     }
// }
// console.log(a)

// let sum = arr.map((ele) => {
//     let total =0;
//     let store =[ ];
//     ele.price.forEach((e) => total+=e );
//     if(total>1000){
//         store.push(ele.user)
//     }
//     return (`${store}`);
// }).filter((ele) => ele!=='')
// console.log(sum);




// 8.Armstrong number find?
// let n =153;
// n=n.toString();
// let strlenght = n.length;
// let res=Number(0);
// for(let i=0; i<n.length; i++){
//     let newn = n[i]
//     res += newn**strlenght
// };
// if(n==res){
//     console.log(`${n} is a armstrong number`)
// }else{
//     console.log("not arstrong number")
// }







// 9. HIgghest occuerence and Number Of Occuerence?
// let arr= [2,4,2,3,1,2,5,2,6];
// let obj ={};
// let count =0;
// let char ="";
// let newarr = arr.map((ele) =>{
//     if(obj.hasOwnProperty(ele) === false ){
//         obj[ele] = 1
//     } else{
//         obj[ele]++
//     }
//     if(obj[ele] > count){
//         count=obj[ele];
//         char=ele;
//     }
// });
// console.log(`Highest Occurence ${char} and Number Of occuerence ${count}`);



// 10.reverse an intiger?
// let n=8901;
// function rever(n){
//    return  Number(n.toString().split('').reverse().join(''))
// }
// console.log(rever(n))






