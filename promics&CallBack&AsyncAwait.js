// Asynchronous---------------------------

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// }, 4000 );

// console.log("three");
// console.log("four");




// CallBack--------------------------------------

// function sum (a,b){
//     console.log(a+b);
// };

// function calculate(a,b, sumcallBack){
//     sumcallBack(a,b)
// };

// calculate(1,3,sum);



// let hello = (() => console.log("hello"));
// setTimeout(hello, 3000)




// CallBack-hell-------------------------------

// function getData (dataid, getNextData){
//     setTimeout(() =>{
//         console.log("data" , dataid);
//         if(getNextData){
//             getNextData()
//         }
//     },2000);
// }

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3);
//     });
// });






// Promises----------------------------

// let myPromise = new Promise((resolve, reject)=>{
//     console.log("i am a promises")
//     // resolve("sucess");       //fulfilled state
//     reject("some error")           //rejected state
// });




// function getData (dataid){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() =>{
//         console.log("data" , dataid);
//         resolve("sucess");
//         // reject("error")
//     },2000);
//     });
// }
// let finalVal = getData(123);
// console.log(finalVal)




// then and catch----------
const getPromise = () =>{
   return new Promise ((resolve, reject) => {
        console.log("promise call");
        resolve("sucess");
        // reject("reject err")
    })
};

let StorePromise = getPromise();
StorePromise.then((res) =>{
    console.log("promise fulfilled", res)
});

StorePromise.catch((err)=>{
    console.log("promise rejected", err)
})


// promise-Chain----------------------------

// function Asynchronous1 (){
//     return new Promise((resolve, reject)=>{
//             setTimeout(() =>{
//                 console.log("data1");
//                 resolve("sucess")
//             }, 3000)
//     })
// }

// function Asynchronous2 (){
//     return new Promise((resolve, reject)=>{
//             setTimeout(() =>{
//                 console.log("data2");
//                 resolve("sucess")
//             }, 3000)
//     })
// }

// console.log("fatching data1....");
// Asynchronous1().then(() =>{
//     console.log("fatching data2...");
//     Asynchronous2().then(()=>{})
// });






// function getData (dataid){
//     return new Promise((resolve, reject) =>{
//          setTimeout(() =>{
//         console.log("data" , dataid);
//         resolve("sucess")
//     },2000);
//     })  
// }

// // getData(1).then((res) =>{
// //     console.log(res);
// //     getData(2).then((res)=>{
// //         console.log(res)
// //     })
// // });

// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res)
// })






// async await----------------------------------------

// function api(){
//    return new Promise ((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("weather data");
//         resolve(200);
//     },2000);
//    });
// }

// async function getData(){
//     await api();        //1st call
//     await api()
// }







// function getData (dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId)
//             resolve("sucess")
//         }, 2000)
//     })
// }

// async function getAllData(){
//     console.log("getting Data1...");
//     await getData(1);
//     console.log("getting Data1...");
//     await getData(2);
//     console.log("getting Data1...");
//     await getData(3);
//     console.log("getting Data1...");
//     await getData(4);
//     console.log("getting Data1...");
//     await getData(5);
//     console.log("getting Data1...");
//     await getData(6);
// }




// with try catch---------------------

// function getData (dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if(dataId === 4){
//                 reject("error unable to fetch data 4")
//             }else{
//                 console.log("data", dataId)
//             resolve("sucess")
//             }
            
//         }, 2000)
//     })
// }

// async function getAllData(){
//     try{
//         console.log("getting Data1...");
//     await getData(1);
//     console.log("getting Data2...");
//     await getData(2);
//     console.log("getting Data3...");
//     await getData(3);
//     console.log("getting Data4...");
//     await getData(4);
//     console.log("getting Data5...");
//     await getData(5);
//     console.log("getting Data6...");
//     await getData(6);
//     }
//     catch(err){
//         console.log(err)
//     }
// }




// iife--------------------------------

// (  
//      async function (){
//     console.log("getting Data1...");
//     await getData(1);
//     console.log("getting Data2...");
//     await getData(2);
//     console.log("getting Data3...");
//     await getData(3);
//     console.log("getting Data4...");
//     await getData(4);
//     console.log("getting Data5...");
//     await getData(5);
//     console.log("getting Data6...");
//     await getData(6);
// }
// )();




// let promis = new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("Data receive")
//         }, 2000)
// });

// timeoutPromise














