let array1 = [2, 5, 7, 10];

// ================= map  =================

// let array2 = array1.map(function(x){
//  return x*2;
// });

let array2 = array1.map((x) => x*2);
console.log(array2);



// ============= filter ================

let array3 = array1.filter( x => x%2 === 0);
console.log(array3);

