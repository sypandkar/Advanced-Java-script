// From mozilla MDN page about classes

// java script classes, introduced in ECMAScript 2015, are primarily syntactical sugar over javascript's existing prototype-based inheritance.

// A class is type of function , but instead of using the keyward function to initiate it, we use the keyward class , and the properties are assigned inside a constructor () method.

// A class is a user defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type.

/*
//traditional way of writing function
function Student (){

}
*/


/*
//way of writing class 
class  Student{
    //When we create the object the constructor method is called. agar aap khud se call nahi karoge to invisible java script apane aap hi constructor method call kar deta hain.
    //jitni bhi proprties hain unko hame constructor ke andar assign karte hain..
    constructor(name,age, batch){
        this.myname = name;
        this.myage = age;
        this.mybatch = batch;
    }
    // Instance method - jab koi bhi object parent class ko inherit kar raha hain ya extend kar raha hain. to uske sath sath instance wale method kko bhi access kae sakta hain. 
    //Agar yeh static biodata() aisa  hota to yah access nahi kar sakta tha. lekin ham instance hi use karte hain ta ki use dusre objects ya dusre class usko inherit ya phir extend kar sake.
    biodata(){
        console.log(`Hi I am a man. My name is ${this.myname} , age is ${this.myage} & batch is ${this.mybatch}`);
        }
}

// for class inheritance we simply use extends word after the chid class 
class Players extends Student{

}

// let obj1 = new Student('Shubham' , 27 , 'Mernstack');
// let obj2 = new Student('mrudula' , 27 , 'Meanstack');

//when player class is empty simply by creating new objects by Player and us player ke object ki madats se Students name ke class main jjo method tha usko call kar diya. 
let obj1 = new Players ('Shubham' , 27 , 'Mernstack');
let obj2 = new Players ('mrudula' , 27 , 'Meanstack');

// we are getting same output with the Players object which is calling the method inside the Student class. This is called as Class inhritance.
obj1.biodata();
obj2.biodata();
*/



/*
//way of writing class 
class  Student{
    constructor(name,age, batch){
        this.myname = name;
        this.myage = age;
        this.mybatch = batch;
    }
    biodata(){
        return `Hi I am a man. My name is ${this.myname} , age is ${this.myage} & batch is ${this.mybatch}`;
        }
}
// jab aap koi bhi class ko inherit karte ho aur us main apna khud ka functionality or ak property agar apko add karna ho to apko constructor likhna hi padega.
// yaha par super likhna jaroori hain aur upar ke class ke paramerts likhna bhi jaroori hain
class Players extends Student{
 constructor (name,age, batch, game){
    super(name,age, batch);                                     // super means => hame constructor create kiya hain apna khud ka and main chahta hoon apke constructor main jitni property thi usko bhi main access kar saku to please uske liye muze allow kijiye.
    this.mygame = game;
}
     //method 
     play_biodata(){
        return `${super.biodata()}. I am player of ${this.mygame}`;         // super ko method ke sath . se use karte hain
    }
}
let obj1 = new Players ('Shubham' , 27 , 'Mernstack' , 'Football.');
console.log(obj1.play_biodata());
*/





for(i = 5; i > 0; i--){
    for(j = i; j<=5 ; j++){
        console.log(j);
        document.write(j);
    }
    document.write(`<br>`);
}