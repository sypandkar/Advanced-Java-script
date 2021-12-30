// @@@@@@@@@@@@@@@@@@@@@@@@ [Destructuring Array] Es-6 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
//before Es-6 
let user = ["Yahoo baba", 25];
let name = user[0];
let age = user[1];

//After Es-6
let [name, age] = user;
*/

/*
// ============== 1. Assigning multiple array values to a variable. ================
let user = ["yahoo baba" , 25 , "Delhi" ];
let [name , age , city] = user;

console.log(name);                   //yahoo baba
console.log(age);                    //25
console.log(city);                   //Delhi
*/

/*
let user = ["yahoo baba" , 25  ];
let [name , age , city] = user;

console.log(name);                   //yahoo baba
console.log(age);                    //25
console.log(city);                   //undefined bacause city value is not defined.
*/

/*
let user = ["yahoo baba" , 22 , "Delhi" ];
let [name , age = 20, city] = user;

console.log(name);                   //yahoo baba
console.log(age);                    //22   (it overrites the value)
console.log(city); 
*/

/*
// It works inside nested array also (nested means array inside array)
let user = ["yahoo baba" , 22 , "Delhi" , ["Male" , 25000]];
let [name , age = 20, city, [gender , salary]] = user;

console.log(name);                   //yahoo baba
console.log(age);                    //22   (it overrites the value)
console.log(city);                   //Delhi
console.log(gender);                 //Male
console.log(salary);                 //25000
*/

/*
// =============== 2. Using Spread operator with Destructuring array =============
let user = ["yahoo baba" , 22 , "Delhi" ];
let [name , ...args] = user;                 //...args is spread operator

console.log(name);                   //yahoo baba
console.log(args);                   // [22, 'Delhi']  remaining value ko rest operator array bana deta hain.
*/


// ============== 3.Destructuring array with function =====================

// function user([name, age = 20, city]){
//     console.log(name);                      //yahoo Baba
//     console.log(age);                       // 22
//     console.log(city);                      //delhi
// }
// user(["yahoo Baba", 22 , "delhi"]);


// //when user will return a value in the form of array 
// function user(){
//    return ["yahoo Baba", 22 , "delhi"];
// }
// let [name,age,city] = user();        //name,age,city are the varibales assigned to user()
// console.log(city);                   //Delhi




// @@@@@@@@@@@@@@@@@@@@@@@@ [Destructuring objects] Es-6 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let user = {
    name: "Yahoo Baba",
    age :  25,
    city : "Delhi"
}

// let {name,age,city} = user;
// console.log(name);                     //Yahoo Baba
// console.log(age);                      //25
// console.log(city);                     //Delhi

// or 
//variables ke liye alice name i.e. short name bhi le sakte hain
let {name :n, age : a,  city : c} = user;
console.log(n);                     //Yahoo Baba
console.log(a);                      //25
console.log(c);                     //Delhi