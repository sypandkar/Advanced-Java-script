//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ SYMBOL DATA TYPE @@@@@@@@@@@@@@@@@@@@@@@@
/*
// It is latest datatype introduced in js
var x = Symbol();
var x = Symbol ("Hello");                          //Unique value
var y = Symbol ("Hello");

console.log(x === y)                                //False (because donho ki apne aap main alag value hain.)
*/



/*
let id = Symbol ("Hello");

console.log(id);
console.log(typeof id);                          //typeof id is symbol
*/



/*
let id1 = Symbol ("Hello");
let id2 = Symbol ("Hello");

console.log(id1 == id2);              // false (matlab id1 aur id2 ki value Symbol ke case main same nahi hain. Wo apne aap main alag hain.)

let str1 = "Hello";
let str2 = "Hello";

console.log(str1 === str2);          // true (id1 au id2 ki value same hain string ke case main)
*/




/*
//++++++++ Symbo ki value ko ham directly document main print nahi kara sakte +++++++++++++++++
let id = Symbol("Hello");

console.log(id);
alert(id);                      //it will show an error that Symmbol datatype.js:39 Uncaught TypeError: Cannot convert a Symbol value to a string
alert(id.toString());              //alet will be shown like Symbol(Hello)     

//if we want to print the value of symbol 
// console.log(id.description);                // Hello
*/


// +++++++++++++++++++++ How to use symbol in Objects ++++++++++++++++++++++++++

let age = Symbol("age");

//symbol ko object main use karne ke liye [] bracket lene padte hain
let user = {
    name : 'Yahoo Baba',
    class : 'Btech',
    // [age] : 25                                 // thus we can use symbol inside object.
};

//we can also use Symbol outside object
user [age] = 25;

 console.log(user.class);                          //Btech
 console.log(user.age);                            // it will show undefined.
 console.log(user[age]);                           // 25  correct way of printing symbol


/*
//++++++++++++++++++++ if we want to print object value with loop for that we use for in loop +++++++++++++++
let age = Symbol("age");

let user = {
    name : 'Yahoo Baba',
    class : 'Btech',                            
};

user [age] = 25;
user ["gender"] = "Male";

for (let key in user){
    console.log(key);
}
//yaha par name class gender sab print ho raha hain. sirf age value ko skip kia hain kyo ki wah ak symbol hain
// ******************* VVIMP symbol ko ham for in loop main use nahi kar sakte. *****************
// WHY we use object in java script ? because we can convert it into json format and we can send it to server. object can be easily converted into json. But it will skip the symbol value.
*/
              

/*
let age = Symbol("age");

let user = {
    name : 'Yahoo Baba',
    class : 'Btech',                            
};

user [age] = 25;
user ["gender"] = "Male";

console.log(user);                            // {name: 'Yahoo Baba', class: 'Btech', gender: 'Male', Symbol(age): 25}

// jab kisi bhi object ko JSON format main use karna hain to ham JSON.stringify() ka use karte hain.
console.log(JSON.stringify(user));                  //{"name":"Yahoo Baba","class":"Btech","gender":"Male"}  yaha par symbol ki value print nahi hui.


//When we convert object into JSON it will skip the value of symbol. It is in hidden form.

//If we want to insert symbol value in object and send it to server in JSON form. Then we have to convert that symbol into string format.

// Jaha par hame unique value ka use karna hain waha par ham Symbol ka use karte hain.
*/