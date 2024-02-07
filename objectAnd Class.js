// let student = {
//     name:'rahul',       //this is property
//     marks:90,           //this is property
//     primtMarks: ()=>{       //this is method
//         console.log("marks =", this.marks);
//     }
// }



// prototype--------------------------

// let employee = {

//     calculate () {
//         console.log("tax rate is 10%")
//     }

//     // calculate : function () {
//     //     console.log("tax rate is 10%")
//     // }
// }


// let rahul = {
//     salary: 10000,
// };

// rahul.__proto__ = employee;             //prototype using __proto__


class car {
    start () {
        console.log("start")
    }
    stop () {
        console.log("stop")
    }
}

let myobj = new car();      //new keyword in javascript is used for creating object from a class. This allocate a memory for a new object. Using new keyword  object access and call the properties and methods defined in class.

// constructor-----------------------------------

// class Toyota {
//     constructor (brand ,milage){
//         this.brandName = brand;
//         this.milage = milage;
//         // console.log("creating a car ")
//     }

//     start () {
//         console.log('this is a car')
//     }
// }

// let tyoytaCar = new Toyota('fortunar', 10);
// console.log(tyoytaCar);


// inheritance------------------------------

// class parent{
//     hello(){
//         console.log("hello")
//     }
// }
// class child extends parent{};
// let obj = new child();


class person{
    constructor(){
        this.specis = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}
class engineer extends person {
    work(){
        console.log("solve problem")
    }
}
let rahul = new engineer();
rahul.eat()




// super -------------------------------------

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.specis = "homo sapiens"
//     }
//     eat(){
//         console.log("eat")
//     }
//     sleep(){
//         console.log("sleep")
//     }
// }
// class engineer extends person {
//     constructor(branch){
//         console.log("enter child constructor");     
//         super();        //to invoke/call parent class constructor
//         this.branch = 'ECE';
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problem")
//     }
// }
// let rahul = new engineer();

//first enter child component.  second parent component and after exit child component.




// practics Questions---------------------------------------

// Qs 1. You are Creating a website for your college. Creat a class User With 2 properties, name & email. It also has a method called viewData() that allows user to view website data?

// let DATA = "website";
// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email
//     }
//     viewData(){
//         console.log(DATA);
//     }
// }

// class student extends user{
//     std(){
//         console.log("younge")
//     }
// }

// let student1 = new student("rahul", "rc34562");
// let student2 = new user("suvo", "heg");


// Qs 2. Creat a new class called Admin which inherits from user. Add a new method called editData to Admin that allows it to edit website data?

// class admin extends user {
//     constructor(name, email){
//         super(name, email)
//     }
//     editData(){
//         DATA = "some new value"
//     }
// }

// let useradmin = new admin("admin", "collage@gmailcom");




// error handaling---------------------


// let a =2;
// let b  =5;

// console.log("a is", a);
// console.log("b is", b);
// console.log("sum", a+b);
// console.log("sum", a+b);
// try{
//     console.log("sum", a+c);
// }
// catch(err){
// console.log(err)
// }

// console.log("sum", a+b);
// console.log("sum", a+b);
// console.log("sum", a+b);





// public/privat membars---------------

// class Public{
//     #height;
//     constructor(width,height){
//         this.width = width;     //public
//         this.#height = height;  //privet
//     }
// }

// let obj = new Public(59,8);
// console.log(obj.#height)     //not outside define privet member. 



// instanceof---------------
// class Animal{
// }
// class Dog extends Animal{
// }
// let obj = new Dog();
// console.log(obj instanceof Dog)
// console.log(obj instanceof Animal)


// MUltiple inheritance---------------------

// let waltmax = {
//     walk(){
//         console.log("walk man")
//     }
// }
// let swimmax = {
//     swim(){
//         console.log("swim")
//     }
// }
// class Animal {
//     constructor(name){
//         this.name = name;
//     }
// }
// Object.assign (Animal.prototype,waltmax,swimmax);
// let obj = new Animal("frog");
// obj.walk()
// console.log(obj)
