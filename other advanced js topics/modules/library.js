 
 1.
export let message ="ES6 Modules";

export function user(name){
    return `Hello ${name}`;
}

//class
export class test{
   //method 
   constructor (){
       console.log("constructor Method");

   }
}


/*
 1.1
 let message ="ES6 Modules";

 function user(name){
    return `Hello ${name}`;
}

//class
 class test{
   //method 
   constructor (){
       console.log("constructor Method");

   }
}
//insteasd of writing export before every funtion/variable/classes. we can write it in shorcut way
export {message, user , test };
*/


/*
//  2. default function
export default function(){
    console.log("Hello")
};

let message ="ES6 Modules";

function user(name){
   return `Hello ${name}`;
}
export {message, user };
*/


/*
// ++++++++++++++++++++ 3. Agrigate modules ++++++++++++++++++++++
function user(){
    return `Hello ${name}`
}
export {user};
*/