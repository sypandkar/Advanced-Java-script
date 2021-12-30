async function xyz (){
     console.log('inside xyz function');
     const response = await fetch ('http://api.github.com/users');
     console.log('before response');
     const users = await response.json();
     console.log('users resolved')
     return users;
    // return "xyz";
}

console.log("Before calling xyz")
let a = xyz();
console.log("After calling xyz")
console.log(a);
a.then(data => console.log(data) )
console.log("Last line of this js file")

