//@@@@@@@@@@@@@@@@@@@@@@@@ Rest Opertor @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
//It was introduced in es-6 but before it the argument() function was being used.

// function sum(){
//     console.log(arguments);

//     let sum = 0;
//     for (let i in arguments){
//         sum += arguments[i]; 
//     }
//     document.write(sum + "<br>");
// }
// // sum (20,30,40);
// // sum(20,30);
// sum ("Shubham Pandkar",20,30,40);                  // 0Shubham Pandkar203040 it shows it as a string so it concatinates
*/

/*
// ***** now for adding only 20,30,40 we have to use RESR OPERATOR ...args ********

function sum(name, course , ...args){                 // ... args is rest operator and it must be a last former parameter                     
    console.log(arguments); 

    document.write(`Hello ${name} Edu ${course}: `)

    let sum = 0;
    for (let i in args){
        sum += args[i]; 
    }
    document.write(sum + "<br>");
}
// sum (20,30,40);
// sum(20,30);
sum ("Shubham Pandkar", "MS IN CS", 20,30,40);                    //Hello Shubham Pandkar : 90
sum ("Mrudula Pandkar","MS IN CS",20,30);                    //Hello Mrudula Pandkar : 90
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ SPREAD OPERATOR @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function sum (name, ...args){
    console.log(arguments);

    document.write(`Hello ${name} : `);

    let sum = 0;
    for( let i in args){
        sum += args[i]; 
    }
    document.write(sum);
}

// sum("Shubham Pandkar", 10,20,30);                 // Hello Shubham Pandkar : 60

// but when we pass an array as an argument it will pass whole array as a one argument
var arr = [10,20,30];
// sum("Shubham Pandkar", arr);                       //Hello Shubham Pandkar : 010,20,30  
// So the The spread operator works here only we have to type ...arr in function calling.
// which converts this arry into multiple arguments
sum("Shubham Pandkar", ...arr);                       //Hello Shubham Pandkar : 60


/*
//++++++++++++++++++++++ Other uses of spread operator ++++++++++++++++

// ================ 1. Cloning the array by using Spread operator =================
var arr = [10,20,30,40,50];
console.log(...arr);                                  //10 20 30 40 50  only prints the value
console.log([...arr]);                                // [10, 20, 30, 40, 50] this clones the array

 
var arr1 = [10,20,30,40];
var arr2 = [...arr1];
arr1.push(50);
console.log(arr1);                                    //[10, 20, 30, 40, 50]
console.log(arr2);                                    //[10, 20, 30, 40]
//yaha par spread operator ke use se sirf arr1 ka copy arr2 main hua but arr1 main 50 push hua lekin arr2 wo copy nahi kar paya.


// 2. ======= Concatinate the array with Spread operator without using the concate function ========

//with use of concate function
var arr1 = [10,20,30,40];
var arr2 = [50,60];
var arr3 = arr1.concat(arr2);
// console.log(arr3);                                     //  [10, 20, 30, 40, 50, 60]

//concatinate using spread operator
var arr3 = [5,...arr1, ...arr2, 70];                      // here i can add other value also
console.log(arr3);                                        // [5, 10, 20, 30, 40, 50, 60, 70]


// 3. ================ Spread operator with OBJECTS ===================== 
var obj1 = {
name : "shubham",
course: "Mern Stack"
};
var obj2 = {
age : 26
}
var obj3 = {...obj1, ...obj2};                            //{name: 'shubham', age: 26}
console.log(obj3);

//Thus we can use spread operator with object and array 
*/