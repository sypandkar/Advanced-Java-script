/*
        // =============* 1. promise structure without argument *========= // 
        let complete = true;                   //result = I am successful
        // let complete = false;               // result = I am failed

        let promise = new Promise ( function(resolve , reject){
            if(complete){
                  resolve("I am successful");
            }else{
                  reject("I am failed ");
            }

        });
        console.log(promise);
        */

        
        // // *============= 2. promise structure with argument =========* 

        // //here I will put promise inside a function named complete. 
        // //when user will be called the function will return promise whether the function passed or failed. So Instead of let complete =  , we will type return.

        // function promise(complete){

        //     return  new Promise ( function(resolve , reject){
        //         console.log("Fetching data, please wait.")
        //         setTimeout( () => {                               //setTimeout 
        //             if(complete){
        //               resolve("I am successful");
        //         }else{
        //               reject("I am failed ");
        //         }
        //         },3000)   //setTimeout ke bad hame ak time bhi specify karna padta hain. yaha 3000 miliseconds ke bad wah promise return karega.
    
        //     });
        // }
        // // console.log(promise(true));         //here true & false are arguments
        // // console.log(promise(false));         //here true & false are arguments

        // /*
        // //declaring two new functions of returend promise
        // //function for the resolved condition
        // let onfullFillment = (result) => {
        // console.log(result);
        // }
        // //fuction for rejected condition
        // let onRejection = (error) => {
        // console.log(error);
        // }
        
        // //yeh function apne aap call nahi hoge is liye .then() & .catch() ka use karna padega promise function ko call karne ke liye.

        // // promise(true).then(onfullFillment);
        // // promise(true).catch(onRejection);
        // or
        // promise(true).then(onfullFillment).catch(onRejection);                //This is called as method chain                
        // */

        // // OR we can write directly  
        // promise(false).then((result) => {
        // console.log(result);
        // }).catch((error) => {
        // console.log(error);
        // });


/*
        // *============== 3.passing two different variables in function ================*
        function promise(a,b){

            return  new Promise ( function(resolve , reject){
                console.log("Fetching data, please wait.")

                var c = a/b;
                    setTimeout( () => {                               //setTimeout
                        if(a,b){
                        resolve(`Your answer ${c}`);
                    }else{
                        reject(`Failed to calculate`);
                        }
                    },2000)   //setTimeout ke bad hame ak time bhi specify karna padta hain. yaha 2000 miliseconds ke bad wah promise return karega.
        
                });
                }
                promise(5,2).then((result) => {
                    console.log(result);
                    }).catch((error) => {
                    console.log(error);
                    });
*/


/*
// * ============ 4. Fetching ajax inside promise function by using jquery =======================*
//for this paste the jquery cdn in html head tag

function promise(){

    return  new Promise( function(resolve , reject){
        console.log("Fetching data, please wait.")
            setTimeout( () => { 
            //using jquery for fetching ajax (yaha par ajax ka call laga rahe hain)
            $.get("https://jsonplaceholder.typicode.com/posts",function(data){
                resolve(data);
            }).fail(err => {
                reject("Failed to load JSON.");
            });
            },2000) 
        });
        }
        //calling the promise function
        promise().then((result) => {
            console.log(result);
            }).catch((error) => {
            console.log(error);
            });
*/