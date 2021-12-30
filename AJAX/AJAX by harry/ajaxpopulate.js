// https://dummy.restapiexample.com/api/v1/employees
// https://jsonplaceholder.typicode.com

// ************************************************************
let popBtn = document.getElementById('popbtn');
popBtn.addEventListener("click" , popHandler);

function popHandler(){
    console.log('you have clicked the pop Handler');
 
    //**********************************************************
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest(); 
    
    //open the object
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);   
    //What to do when responce is ready
    xhr.onload = function (){                
      if (this.status === 200) {             
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById("List");
        str = "";
        for (key in obj){            // means for each in of obj ,[which we ge by fetching link]
          str += `<Li> ${obj[key].username} - ${obj[key].address.city}</Li>`; // from https://jsonplaceholder.typicode.com/
        }
        list.innerHTML = str;
      } else{
        console.error("some error occured");
      }
    };
    
    //send the request
    xhr.send();    
    console.log("we are done fetching employees!");
}