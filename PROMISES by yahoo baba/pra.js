
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

/*
// *============= 2. promise structure with argument =========* 
function promise(complete){

    return  new Promise ( function(resolve , reject){
        console.log("Fetching data, please wait.")
            setTimeout( () => {                               //setTimeout
                if(complete){
                resolve("I am successful");
            }else{
                reject("I am failed ");
                }
            },3000)   //setTimeout ke bad hame ak time bhi specify karna padta hain. yaha 3000 miliseconds ke bad wah promise return karega.

        });
        }
        promise(false).then((result) => {
            console.log(result);
            }).catch((error) => {
            console.log(error);
            });
*/


/*
//   *============== 3.passing two different variables in function ================*
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