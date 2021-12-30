//@@@@@@@@@@@@@@@@@@@@@@@@@ [ OOP - object oriented programming] @@@@@@@@@@@@@@@@@@@@@@@@
/*
class hello{                                             //class
    message(){                                           // message nam ka method define kiya hain. 
        console.log("Hello Everyone");
    }
    sorry(){
        console.log("Sry everyone");
    }
}
//method ko call karne ke liye class ka ak object banana padega.
let a = new hello();

//for calling function object ke name ko use karna hoga
a.message();
a.sorry();
*/

// ================= Types of methods =================================
// 1. constructor 2. Prototype 3. Static 
/*
// 1. Constructor
class student{
    constructor(){
        console.log("Constructor Function");
    }
}

let a = new student();                //Constructor Function
let b = new student();                // Constructor Function  (because both are different objects.)
*/

/*
// 2. Prototypes
// how to take property and assign a value 
class student{
    constructor(){
        let name;
        console.log("constructor Function");
    }

    hello(){
        console.log("Hello" + this.name);
    }
}

let a = new student();
// here i accessed a property and assigned a value to it
a.name = " Yahoo baba ";
a.hello();
*/

// Or 
/*
class student{
    constructor(name , age){
        this.Studentname = name;
        this.Studentage = age; 
        console.log("constructor Function");
    }

    hello(){
        // console.log("Hello" + this.Studentname + " Your age is " + this.Studentage);
        console.log(`Hello ${this.Studentname} Your age is ${this.Studentage} `)
    }

    //static method (object bana kar ise call nahi kar sakte)
    static staticMethod(){
        console.log("Static Function");
    }
}
let a = new student(" Yahoo Baba" , 28);
//we can make multiple objects here
let b = new student("Shubham Pandkar", 26);

a.hello();
b.hello();
// a.staticMethod();                // it will show an error because object bana kar static method ko call nahi kar sakte
student.staticMethod();             // Static Function (student is class name & staticMethod is method name.)
*/