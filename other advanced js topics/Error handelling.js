//@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Error handling  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
try {
    console.log('Start of Try');
    console.log('End of Try');
} catch (error) {
    console.log('Error has occured');
}
*/


/*
try {
    console.log('Start of Try');

    blabla();

    console.log('End of Try');
} catch (error) {
    // console.log('Error has occured');
    console.log(error);                                  //ReferenceError: blabla is not defined at Error handelling.js:14
}
*/



/*
// try catch method works synchronously if we use settimeout() function , it will not work properly
try {
    setTimeout(function(){
    blabla;
    },1000);
    console.log('End of Try');
} catch (error) {
    // console.log('Error has occured');
    console.log(error);
}
*/

/*
// ++++++++   now it will work properly with settimeout() if we type a code like below
setTimeout(function(){
try {
    blabla;
}catch (error) {
        console.log('Error has occured');
        // console.log(error);
    }
},1000);
*/


/*
    try {
        blabla;
    }catch (error) {
            // console.log('Error has occured');
            console.log(error);                   //ReferenceError: blabla is not defined at Error handelling.js:55s
    }
*/
    
/*
    //we can pritn this error seperately = 1st is name, 2. message , 3. stack
    try {
        blabla;
    }catch (error) {
            // console.log('Error has occured');
            console.log(error.name);                   
            console.log(error.message);                      
            console.log(error.stack);                 //stack means pura total message with line number.                
    }
*/

/*
try {
    blabla;
}catch (error) {
        // console.log('Error has occured');
        if(error instanceof ReferenceError){
            console.log('ReferenceError');
        }else if(error instanceof TypeError){
            console.log('TypeError');
        }else{
            console.log('unknownError');
        }    
}
*/

/*
// Where we use try catch maethod ? mostly when we have to fetch dada from server in JSON form
try {
    let json = '{"name":"Yahoo Baba" , "age" : 30}';
    let user = JSON.parse(json);                             //ISON.parse is used for converting server data to object
    //jab hame java script ke data ko server pe send karna ho to ham javascript ke data ko pahele JSON main convert karte hain uske liye JSON.stringify use karte hain.

    //JSON. stringify() takes a JavaScript object and then transforms it into a JSON string. 
    //JSON. parse() takes a JSON string and then transforms it into a JavaScript object

    console.log(user.name);
    console.log(user.age);
}catch(error){
    console.log(error);
}
*/



//We can show our own error message too. Yaha par ham try method main ak error message throw karte hain.
try {
    // let json = '{ "age" : 30}';
    let json = '{ "name" : "Yahoo baba" , "age" : 30}';
    let user = JSON.parse(json);        
    
    
    if(!user.name){
        //throw method works in only try 
        throw new Error("incomplete data : No name");
    }

    console.log(user.name);
    console.log(user.age);
}catch(error){
    console.log(error);                    //Error: incomplete data : No name
}finally{
    console.log('Finally');                
}