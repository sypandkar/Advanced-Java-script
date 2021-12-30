
// ================= 1. Async await method   =============== //
async function test() {
    console.log("2 : Message");
    const response = await fetch("JSON/student_data.json");
    console.log("3 : Message");
    const students = await response.json();
    return students
}

console.log("1 : mesage");
let a = test();
console.log("4 : Message");
console.log(a);



 // ============ 2.shortcut method to write async await  ======== //
async function test() {
    // const response = await fetch("JSON/student_data1.json");
    // const students = await response.json();
    // return students;

    // or we can directly write 
    return (await fetch("json/student_data.json")).json();       //.json will return the data in json format.
}

//first we called async function i.e. test() which will return the promise. If the promise runs successfully then .then() function will be called. If the error occurs at that time .catch() function will be called.
test().then((res) => {
console.log(res);
}).catch((error) =>{
console.log(error);
})




// ====================== 3. Error handling with try & catch method (Substitute for catch() method) ==================== //
//when we use .then() multiple times so everytime we need to write .catch() function. Instead of that we can write like below 
async function test() {
    try{
        const response = await fetch("JSON/student_data.json");
        const students = await response.json();
        return students;
    }catch(error){
        console.log(error);
    }   
}
// so now here we don't need to write .catch() everytime after calling then() function
test().then((res) => {
console.log(res);
})
