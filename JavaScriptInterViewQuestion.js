// 1.What is JavaScript?and javaScript engine?
// JavaSCript is programing language that is used for converting static web pages to interactive and dynamic web pages.

// javaScript engine is a program present in web browesers that executes javaScript code. chrome->V8,   firefox -> spider Monkey.


// 2. Scope?
// Scope determines where variable are define and where they can be accssed.
// there three types scope --> Global, function, Block
//  when no keyWord use for declear variable then var is automatically impliment.


// 3. Hoisting?
// Hoisting is a javaScript behavior where function and variable declaration are moved to the top of their respective scopes during the compilation phase.
// hoisting();
// function hoisting(){
//     console.log("hello")
// };

// console.log(x);         //undefined beacuse declarition is hoisted not assignment
// var x =10;

// 4. JSON?
// JSON(JavaScript object Notation) is lightweight data interchange format.


// 5. Variables?
// Variables are used to store data.

// 6. All DataTypes?


// 7. Difference Between primitiv eand NonPrimitiv DataTypes?
// Primitive data types can hold only single values.
// Primitive data types are immutible means their value once assigned, cannot be changed. when we reassign value then we get update value but this value in new memeory storage.
// primitive DataTypes are simple Data types.

// NoNPrimitive data types can hold multiple values and method also.
// NoNPrimitive data types are mmutible means their value once assigned, can be changed after.
// NoNprimitive DataTypes are Complex Data types.




// 8. Difference Between null and undefined?
// Undefined when a variable is declared but has not been assigned a value.
// Undefined can be used when you don't have the value right but you will get it after some logic or operation. 
// null variable are intentionally assigned the null value.
// null can be used, when you are sure you do not have any value for the particular variable.



// 9. What is type coercion?
// The type Coercion is the automatic conversion of values from one data type to another data type during certain operation or comparisons.
// let str = "45";
// let num = 45;
// let boleen = true;
// let nulval = null;
// console.log(str+num);        //type coercion can be use for concatination of string and number.
// console.log(num+boleen);
// console.log(num == str);
// console.log(boleen+nulval)



// 10. operator ?
// unary -> single operand ++a;
//  Binary Two operands a+b;
//  Ternary Operator three operands 



// 11. Operator precedence?
// As per operator precedence, operators with higherprecedence are evalutes first.
// let a = 6;
// let b = 3;
// let c =2;
// let result = a+b*c+(a_b)



// 12. Short circut evalution?
//  short circut evaluation stops the execution as soon as the result can be determined without evaluting the remaining sub-expression.
// let result = false && somefun();
// console.log(result);


// 13.Types of condition statement?
// i) if else  ii)Ternary Operator iii)Switch

// let arr = [1,2,3,4,5,6,7];
// function display(first, second, ...restparm){
//     console.log(`${first}`);
//     console.log(second);
//     console.log(restparm.join(""))
// }
// display(...arr);



// 14. Array?
// An array is a data type that allows you to store multiple values in a single variable.


// 15. find and filter and slice?(this all is array methods for getting elements)
// find() method get the first element that satisfies a condition.
// filter() method get an array of elements that satisfies a condition.
// slice() method get a subset of the array from start index to end index(end index not count).


// 16. map and forEach?
// The map() method is used when you want to modify each element of an array and creat a new array with the modified values.
// forEach() method is used when you want to perform some operation on each element of an array without creating a new array.return list of element.


// 17. Array Destructuring?
//  Array destructuring allows you to extract elements from an array and assign them to individual in a single statement.



// 18. Array-like object?
// Array-like objects are objects that have indexed elements and a length propety, similer to arrays, but they may not have all the methods of array like push(), pop().  

// function sum(){
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[0])
// }
// sum(1,2,3)


// 19. How to convert array-like object into an array?
// let array = {0:"rahul", 1:"ra", 2:"chapra"};
// let newarr = Object.values(array);
// // let newarr = [...Object.values(array)];
// console.log(newarr);
// console.log(array)


// 20. loop?
// A loop is a programming way to run a piece of code repeatedly until a certain condition is met
// while('a'=="a"){
//     console.log("hallpy")
// }

// for loop allows to iterate a block of code a specific number of times. 


// 21. Difference Between While and do-while loop?
// while loop execute a block of code while certain condition is true.
// do-while loop is similar to the while loop, except that the block of code is executed at least once, even if the condition is false. 


// 22. Difference between for...of and for..in loop?
// for..of loop is used to loop througn the values of an object like array and string. It allows you to access each value directly, without having to use an index. 

// for.in loop is used to loop through the properties of an object.
// It allows you to iterate over the keys of an object and access the values associated by using keys as the index.


// 23. for..of loop and forEach ?
//  for..of loop is suitable when you need more control over the loop, such as using break statement or continue statement inside.
// forEach method iterate over each element of the array and perform some action on each element.



// 24. function?
// A function is a reusable block of code that performs a specific task.


// 25. callback functions?
//  A callback function is a function that is passed as an argument to another function.
// function add(a,b){
//     return a*b;
// }
// // let x =7;
// // let y =3;
// add();

// function display(a,b,operator){
//     return operator(a,b)
// }
// console.log(display(10,5,add));



// 26. Higher-Order function?
// Take one or more functions as arguments (callback function) OR Return a function as a result. 
// function higherOrderFunction(callback) {
//     console.log("Executing higher-order function");
//     callback();
// }

// function callbackFunction() {
//     console.log("Callback function executed");
// }
// higherOrderFunction(callbackFunction);




// 27. parameters and arguments?
//  parameters are the placeholder defined in the function declaration.
// arguments are the actual values passed to a function when it is called.
// many ways can you pass argument to a function 
// positional arguments ->
//     function add(a,b){
//         console.log(a+b);
//     }
//     add(3,4);
// Named arguments -->
//     let prson = {
//         name:"rahul",
//         age:23
//     }
//     function greet (prson){
//             console.log(prson.name + prson.age)
//     }
//     greet(prson)
// Arguments Object-->
// sum(1,2,3);
// function sum(){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }




// 28. Default parameter?
//  In javascript, default parameters allow you to specify default values for function parameter.



// 29. event handling?
// Event handling is the process of responding to user actions in a web page.
// The addEventListener method of javascript allows to attach an event name with the function you want to perform on that event.




// 30. First-Class function?
// A programming language is said to have First-class function if function in that language are treated like other variabl.
// First-class functions in JavaScript means that functions are treated as first-class citizens, allowing them to be assigned to variables, passed as arguments to other functions, returned from other functions, and stored in data structures.
// This feature enables more flexible and expressive coding patterns, making it easier to write modular, reusable, and higher-order functions.





// 31. pure function and impure function?
// A pure function is a function that always produces the same output for the same input. pure functions cannot modify the state. pure functions cannot have side effects.
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5));
// console.log(add(4,5));

// An impure function, can produce different outputs for the sane input. Impure functions can modify the state. Impure functions can have side effects.
// let total =0;
// function add(val){
//     total +=val;
//     return total;
// }
// console.log(add(5));
// console.log(add(5));





// 32. Function Currying ?
// Currying in javascript transforms a function with multiple arguments into a nested series of function, each taking a single argument.
// advantage : Reusability, modularity, specialization. 
// function mul(a){
//     return function (b){
//         return a*b;
//     }
// }
// let double = mul(2);
// console.log(double(4));

// let res = mul (2)(6);
// console.log(res);

// let second = mul(5);
// console.log(second(4))



// 33. call,apply,bind?
// These methods provide a way to manipulate the this value and pass arguments to function.
// function sayhello(me){
//     console.log(this.name)
// };
// let person = {name : "rahul"};

// sayhello.call(person);
// sayhello.apply(person);




// *************************************************String*************************************************

// 33. what is string?
// A  string is data type used to store and manipulate data.



// 34. template literals?
// A template literals, also known as a template string, is a feature introduce in ES6(2015) for string interpolation and multiline string in javascript.
// string interpolation means ${} tuis.





// 35. Difference Between single quotes(''), double quotes("")& backticks(``)?
// single quotes('') and double quotes("") is same define for string.
// backticks(``) use for define template literals inside them.



// 36. string immutability?
// String in javascript are considered immutable because you cannot modify the contents of an existing string directly. when we update string after creat it contain a new storage.



// 37. concatenate string?
// + Operator,  Concat()method,  Template literals,  join() method
// let str ="rahul";
// let str2  ="cha";
// console.log(str + str2);
// console.log(str.concat(str2));
// console.log(`${str} ${str2}`);
// let result = [str,str2]
// console.log(result.join(''));





// **********************************************DOM**********************************************
// 38. Dom?
// The Dom (document object model) represents the web page as a tree-like structure that allows javascript to dynamically acess and manipulate the content and structure of a web page. 



// 39. Selectors?
// Selectors in js help to get specific elements from DOM based on iDs,class,tag names.(getElementByid(), getElementByClassName(), getElementByTagName(), querySelector(), querySelectorAll()  )


// let ele = document.getElementById("div1");
// ele.textContent = "<p>happu</p>";
// // ele.innerHTML = "<p>happu</p>"


// ele.style.setProperty("color", "red");
// ele.setAttribute("data", "new val");
// console.log(ele);
// ele.classList.add("high");
// ele.classList.remove("high");
// ele.classList.toggle("high");


// 40. create new element in DOM using JS? 
// let newele = document.createElement("div");
// newele.textContent="newly";
// document.body.append(newele);



// 41. Difference Between creatElement() and cloneNode() ? 
// creatElement() creat a freash element and cloneNode() creat a copy of element.




// 42. Error handling in js?
// Error handling is the process of managing errors.



// 43. types of errors?
// syntax error => console.log("hello"
//  Reference error  => console.log(myvar)  //not declear myvar;
// type error => let num = 45;  console.log(num.toUpperCase());
// Range Error => let arr = [1,2,3];   console.log(arr[10]);





// ****************************************object****************************************
// 44. object?
// An object is a data type that allows you to store key-value pairs.


// 45. Array and object difference?
// array are collection of values. 
// array are denoted by squar brackets[]
// Object are collection of key-value pairs.
// object are denoted by curly braces{}.



// 46. difference Between dot notation and bracket notation?
// Both dot notation and bracket notation are used to access properties or method of an object. dot notaion is more popular and used due to its simplicity.
// when property name is store in a variable then bracket notation use.

// let per ={
//     name:"rahul",
//     age:23
// };
// // console.log(per.name);
// console.log(per["name"])

// let store = "age";
// console.log(per[store]);
// // console.log(per.store);   //error



// 47. What are some common methods to iterate over the properties of an object?
// for...on loop



// 48. How do you check if a property exists in an object?
// let per={
//     name:"rahul",
//     age:23
// };
// console.log("name" in per);
// console.log("city" in per);

// console.log(per.name !== undefined);
// console.log(per.city !== undefined);



// 49. How do you clone or copy an object?
// let per={
//     name:"rahul",
//     age:23
// };
// let shalowcopy = {...per};
// console.log(shalowcopy)

// let deepcopy = JSON.parse(JSON.stringify(per));
// console.log(deepcopy);



// 50. What is the difference between deep copy and shallow copy?
// Shallow copy in nested object case will modify the parent object property value , if cloned object property value is changed.  But deep copy will not modify the parent object property value.




// 51. What is Set Object in JS?
// The set object is a collection of unique values, meaning that duplicate values are not allowed.
// set provides methods for adding, deleting , and checking the existence of values in the set.
// set can be used to remove duplicate values from arayy.

// let arr = new Set();
// arr.add(5);
// arr.add(35);
// console.log(arr);
// arr.delete(5);
// console.log(arr);

// let dup = [1,2,3,4,2,3];
// let newarr = new Set(dup);
// let result =[...newarr]
// console.log(result)




// 52. What are Events? 
// Events are actions that happen in the browser, such as a button click,mouseOver etc.



// 53. Event Object?
// Whenever any event is triggered, the browser automatically creats an event object and pass it as an argument to the event handler function.
// The event object contains various properties and methods that provide information about the event, such as the type of event, the element that triggered the event etc.


// 54. Event Delegation?
//  Event delegation in javascript is a technique where you attach a single event  handler to a parent element to handle events on its child elements.



// 55. Event Bubbling?
// Event bubbling is the process in javascript where an event trigger on a child element propagates up the DOM tree, triggering event handlers on its parent elements.




// 56. event.preventDefault()?
//  The event.preventDefault() method is used to prevent the default behavior of an event and the link click will be prevented.


// 57. this keyword in event handling?
// this keyword refers to the element that the events handler is attached to.


// 58. remove eventListener?
// answer in pdf.



// 59. Scope?
// Local scope: Variables declared inside a function have local scope, which means they can only be accessed within the function not outside.

// function sum (a){
//     return a
// }
// sum(2);
// console.log(a);

// Global scope: Variables declared outside any function have global scope, which means they can accessed from anywhere within a program.



// 60. asynchronous operation ?
//  Asynchronous operations are operation that do not block the execution of the code.
// setTimeout is the asynchronous function which executes callback function after a specific period of time.



// 61. promises?

// var mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//         resolve("data get succes")
//     }else{
//         reject("data not found")
//     }
//     },1000)
// });

// mypromise.then((r)=>{
//     console.log(r) 
//     console.log('then block')
//     })
//      .catch((err)=>{
//      console.log(err,'catch block')
//      // console.log()
//      });





