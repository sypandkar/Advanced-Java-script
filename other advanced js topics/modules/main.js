/*
// ++++++++++ 1. tradition way of exporting files +++++++++++++

import { message ,user as us , test } from "./library.js";

// user as us => alicement (method of changing imported function name)

console.log(message);

// document.body.innerHTML = message;

// console.log(user("Pondy Baba"));
console.log(us("Yahoo Baba"));

//test() nam ki class ka object banaya
let a = new test();
*/

/*
// +++++++++++++++ 1.1. Import all function, variable, and classes from that file then we use *  +++++++++
import * as yahoo from "./library.js";
console.log(yahoo.message);

console.log(yahoo.user("Yahoo Baba"));

//test() nam ki class ka object banaya
let a = new yahoo.test();
*/


/*
// +++++++++++++ 2. default function ++++++++++++++
// import yahoo from "/.library.js";       //1st wali file main jo bhi default function hoga usko yahoo nam diya hain. agar usko yahoo nam ka kuch bhi nahi milta to default jo bhi function hoga usko yah call kar dega.
import yahoo from "./library.js";
import {message,user} from "./library.js";  
yahoo();

console.log(message);
console.log(user("Yahoo Baba"));
*/

/*
// ++++++++++++++++++++ 3. Agrigate modules ++++++++++++++++++++++
// with this we can use multiple modules in another Files 
import { user } from "./bridge.js";
console.log(user());
*/