
        /*
        // =========== 1) Ajax for the text file with normal text in string format =========== //
        function loadData(){
            // 1. ab ham obj create karenge XMLhttpRequest name ki class ka 
            var xhttp = new XMLHttpRequest();
            //3.request konsi stage par pahunchi hain is ke liye 
            xhttp.onreadystatechange = function(){
                //yaha par check karenge responce aya ki nahi
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("demo").innerHTML = this.responseText;
                    //response main erroe aa gaya to
                }else if(this.readyState == 4 && this.status == 404){
                    document.getElementById("demo").innerHTML = "File not found.";
                }
            };
            // 2.is file ko ham yaha par open karenge
            xhttp.open('GET' , "content/readme.txt",true);
            //1)method , 2)konsiwali file se data read karne wale hain , 3)asynchronous mode ke liye true
            xhttp.send();
        }
        */


        /*

        // =========== 2) Ajax for the data in JSON from =========== //
        //jo hame server se php wali file data return karta hain. 
        function loadData(){
            // 1. ab ham obj create karenge XMLhttpRequest name ki class ka 
            var xhttp = new XMLHttpRequest();
            //3.request konsi stage par pahunchi hain is ke liye 
            xhttp.onreadystatechange = function(){
                //yaha par check karenge responce aya ki nahi
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                    //response main erroe aa gaya to
                }else if(this.readyState == 4 && this.status == 404){
                    document.getElementById("demo").innerHTML = "File not found.";
                }
            };
            // 2.is file ko ham yaha par open karenge
            xhttp.open('GET' , "https://jsonplaceholder.typicode.com/albums",true);
            //1)method , 2)fake api link , 3)asynchronous mode ke liye true
            xhttp.send();
        }
        */