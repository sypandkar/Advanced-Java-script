//@@@@@@@@@@@@@@@@@@@@@@@@@@ Object Literal @@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let Name = "Yahoo baba";
let course = "Btech";

//old method 
// var obj = {
//     Name : Name,
//     course : course
// };

//object literal ES-6 method 
var obj = {
    Name,
    course
}
console.log(obj);
*/


//================ 2. object Literal - Use variable as a property name =================
/*
let n = "name";

var obj ={
    [n] : "Yahoo Baba",
    course: "Btech"
};

console.log(obj);                                 //{name: 'Yahoo Baba', course: 'Btech'}
console.log(obj.name);                            //Yahoo Baba
*/

/*
// [n] is property ke name ko ham computate bhi kar sakte hain i.e. iske andar arithmatic operation ka use karke bhi yaha par property ka name change kar sakte hain. 

let n = "Student";

var obj ={
    [n + "name"] : "Yahoo Baba",
    course: "Btech",
    detail: function(){
        return `${this.Studentname} is student of ${this.course}`;
    }
};

console.log(obj);                                 //{Studentname: 'Yahoo Baba', course: 'Btech'}        
console.log(obj.detail());                        //Yahoo Baba is student of Btech
*/


// ==================== 3. Object literal : New function Syntax =======================
/*
let n = "Student";

var obj ={
    [n + "name"] : "Yahoo Baba",
    course: "Btech",
    'Show detail'(){                              // function word can be skipped & we can give space between words of modified name but for that we need to write inside '' quote.
        return `${this.Studentname} is student of ${this.course}`;
    }
};

console.log(obj);                                 //{Studentname: 'Yahoo Baba', course: 'Btech'}        
console.log(obj['Show detail']());                //Yahoo Baba is student of Btech
// here we used bracket notation 
*/

// ================== 4. returning Object as an value inside a function =====================

let fname = "Yahoo";
let lname = "Baba";
let course = "Btech";

function student(fname , lname , course){
    let fullName = fname + " " + lname;
    return {fullName , course};
    // yaha par ham ak function banake ak object ko return kar sakte hain. for that we used {}
}

console.log(student(fname , lname , course));           //{fullName: 'Yahoo Baba', course: 'Btech'}

//single value ko dekhne ke liye ak variable ko object bana ke value ko access kar sakte hain. 
let s = student(fname , lname , course);

console.log(s.fullName);                                // Yahoo baba
console.log(s.course);                                  //Btech
// yaha par hamne dekha ki kaise ham ak function banake ak object ko return kar sakte hain.