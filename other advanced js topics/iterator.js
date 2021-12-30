//@@@@@@@@@@@@@@@@@@@@@@ Iteraor @@@@@@@@@@@@@@@@@@@@@@@
/*
let numbers = [100,200,300];
console.log(typeof numbers[Symbol.iterator]);                 //Function

let iter = numbers[Symbol.iterator]();
console.log(iter.next());                 //next() se sabse paheli wali value print ho jayegi. {value: 100, done: false}
console.log(iter.next());                 
console.log(iter.next());                
console.log(iter.next());                  //value: undefined here in array there are only 3 values so sari values khatam ho gayi is liye 4rth wale .next() ko value:unefined and  done:true print hua.  
*/


/*
let numbers = [100,200,300];
console.log(typeof numbers[Symbol.iterator]);                 //Function

let iter = numbers[Symbol.iterator]();
iter.next();                //1rst value will not be printed now.
iter.next();                //2ND value will not be printed now.
                
console.log(iter.next());   //{value: 300, done: false}          
*/


/*
// by using iterator we can check any value. in loop we have to print all values but with ietrator we can use any value any time.
let numbers = [100,200,300];

let iter = numbers[Symbol.iterator]();
iter.next();                //1rst value will not be printed now.
iter.next();                //2ND value will not be printed now.
console.log("Hello");
console.log("Hello");
console.log("Hello");
                
console.log(iter.next());   //{value: 300, done: false}
*/


/*
//+++++++++++++ .next().value with this we can directly print value ++++++++++++++
let numbers = [100,200,300];
let iter = numbers[Symbol.iterator]();

iter.next();  
iter.next();  
console.log(iter.next().value);              //300
console.log(iter.next().done);               // true        (because 3ri value ke bad dusri koi value hi nahi hain)
*/

/*
let numbers = [100,200,300];
let iter = numbers[Symbol.iterator]();
iter.next();  
console.log(iter.next().value);              //200        (2nd case ki value check ki hain)
console.log(iter.next().done);               //false      (3rd case ke liye false aya hain. 3rd value ki done property check ki hain).
  
//jan ham apna hi loop banate hain iterator ko use karke tab ham yeh check kar sakte hain ki done ki value kya hain.
// jab tak value false hain tab tak loop chala sakte hain aur jab value true ho jayegi tab ham loop ko band kar sate hain.
*/


/*
// agar values jyada hogi ex. 30 or 300 to uske liye hame loop banana h padega
let numbers = [100,200,300,400,500];
let iter = numbers[Symbol.iterator]();

let result = iter.next();  

//while loop tab tak chalana hain jab tak done ki value true nahi ho jayegi
while(!result.done){
console.log(result.value);
   result = iter.next();                // while loop main increment aur decrement karni padti hain.
}
*/


/*
// We can use iterators with strings also
let str = "Yahoo Baba";
let iter = str[Symbol.iterator]();

let result = iter.next();  

while(!result.done){
    console.log(result.value);
       result = iter.next();              
    }
*/

/*
// we can do this with for of loop also 
let str = "Yahoo Baba";
for (let char of str){
    console.log(char);
}
*/


// ++++++++++++++ we can create our own iterator also +++++++++++++++++
//before es-6 we have to code for creating our own iterator.
function numberIterator(arr){
    var nextNum = 0;
    return{
        next(){
            if(nextNum < arr.length){
                return{
                    value : arr[nextNum++],
                    done: false
                }
            }else{
                return{
                    done: true
                }
            }
            
        }
    }
}
// with Es-6 instead of typing whole code like above. we can use [Symbol.iterator](); 

// let numbers = [100,200,300];
let numbers = [100,200,300,400,500]; 
let num = numberIterator(numbers);
console.log(num.next());
num.next();                                     // 2nd value print nahi hogi....
console.log(num.next().value);
console.log(num.next());
console.log(num.next());
console.log(num.next());    
console.log(num.next()); 
