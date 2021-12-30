//@@@@@@@@@@@@@@@@@@@@@@@ Generators @@@@@@@@@@@@@@@@@@@@@@@@@@@
//Generators is a type of a function on we have to add * before the name of function i.e. function*test(){}
// we use yeild word before the statements inside the function. (yeild means pause)
// .next();


/*
function *generateit(){                                  //* befor function name which is called as generator function
    console.log('First message');
    console.log('second message');
}

// generateit();                                           // nothing will be printed.
let g = generateit();
console.log(g.next());                                    //First message
                                                         // generators.js:8 second message
                                                          // generators.js:13 {value: undefined, done: true}
*/  


/*
function *generateit(){                                  
    yield 'Yeild No.1';                                      //yield ak abject return karta hain.
    yield 'Yeild No.2'; 
}
                                    
let g = generateit();
console.log(g.next());                                    
console.log(g.next());
console.log(g.next());                                      //value:undefined , done: true
                                                            // yeild ki value tab tak return hoti agar uske ander koi value hogi
*/



/*
function *generateit(){                                  
    yield 'Yeild No.1';                                      //yield ak abject return karta hain.
    yield 'Yeild No.2'; 
    yield 'Yeild No.3'; 
}
                                    
let g = generateit();
console.log(g.next());                                    
g.next();                                                    //it will not be printed.
console.log(g.next());                                       // only 1 & 3 will be printed.


// //only vale print karne ke liye 
// let g = generateit();
// console.log(g.next().value);                                    
// g.next();                                                    //it will not be printed.
// console.log(g.next().value);                                 // only 1 & 3 will be printed.
*/


/*
// ++++++++++++++++++++++ Using for of loop in generators +++++++++++++++++++++++
//jab sare function ke values ko bar bar print karna hain to uske liye for of loop use kar sakte hain
function *generateit(){                                  
    yield 'Yeild No.1';                                     
    yield 'Yeild No.2'; 
    yield 'Yeild No.3'; 
}

let g = generateit();
for (let value of g){
    console.log(value);
}
*/


/*
// +++++++++++++++++++++++ For making unlimited yields ++++++++++++++++++++++++++
function *generateit(){
    let nextNum = 300;
    // while loop is used because we don't know the number of yeilds
    while (true) {
        yield (nextNum++);
    }
}

let g = generateit();
// console.log(g.next().value);                 // 300
// console.log(g.next().value);                 //301
// console.log(g.next().value);                 //302
// console.log(g.next().value);                 //303
// console.log(g.next().value);                 //304
// //jitni bar ham fnction ko call karenge utni bar hame generator function ki yeid ki value return hoti ragehi. increment ho ke.

//ham ise for loop se bhi pint kara sakte hain lekin uske liye if ki condition lagani padegi warna hamara system hang ho jayega

for (let value of g){
    if (value > 308) break;                                //break laga ne se yah for loop ke bahar aa jayega
    console.log(value);
}
// thus we can print unlimited yeild by using for of loop with break
*/


// ++++++++++++++  New way of using yeild method ++++++++++++++++
/*
function *generateit(){
    let result = (yield) * 10;
    console.log(`Result : ${result}`);
}

let g = generateit();
g.next();
g.next(500);
*/


/*
function *generateit(){
    let yArray = [yield,yield,yield];
    console.log(`Result : ${yArray}`);
    console.log(`Result : ${yArray[2]}`);
}

let g = generateit();
g.next();
g.next("PHP");
g.next("Python");
g.next("Java");
g.next(800);
*/



/*
// ak generator ke andar ham single value aur array bhi rakh sakte hain i.e. multiple values le sakte hain 
function *generateit(){
  yield 55;
  yield* ['Node', 'Angular' , 'React'];
}

let g = generateit();
console.log(g.next());
console.log(g.next().value);                     // sirf value print ho gi done property print 
console.log(g.next().value);
console.log(g.next());
console.log(g.next());
*/




function *generateit(){
    yield 'php';
    yield 'Node';
    yield 'Angular';
    yield 'React';
  }
  
 
// let g = generateit();
// console.log(g.next().value);                // PHP

// //remaining values ko spread operator se array ke form main print kar sakte hain 
// // console.log([...g]);                       // (3) ['Node', 'Angular', 'React']

// console.log(g.next().value);                  // Node       
// console.log([...g]);



// ++++++++++++++ Using return function in generators ++++++++++++++++++

let g = generateit();
console.log(g.next().value);                     // PHP
console.log(g.return('Ending Now'));             //{value: 'Ending Now', done: true}
// return jaise normal function main work karta hain waise hi yaha par bhi work karta hain. 
//true tab ata hain jab uske bad koi value nahi ati.
console.log(g.next().value);                     // undefined (return karne ke bad age ka cod run hi nahi hoga).

// Agar generator function ko bich main end karna hain ex. ak statement ke bad ya dusri statement ke bad to ham return ka use kar sakte hain.
