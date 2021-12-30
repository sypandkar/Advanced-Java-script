
        /*
        // =========== 1) Ajax for the text file with normal text in string format =========== //
        function loadData(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("demo").innerHTML = this.responseText;
                }else if(this.readyState == 4 && this.status == 404){
                    document.getElementById("demo").innerHTML = "File not found.";
                }
            };
            xhttp.open('GET' , "content/readme.txt",true);
            //1)method , 2)konsiwali file se data read karne wale hain , 3)asynchronous mode ke liye true
            xhttp.send();
        }
        */
        
        
        // =========== 2) Ajax for the data in JSON from =========== //
        //jo hame server se php wali file data return karta hain. 
        function loadData(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                }else if(this.readyState == 4 && this.status == 404){
                    document.getElementById("demo").innerHTML = "File not found.";
                }
            };
            xhttp.open('GET' , "https://jsonplaceholder.typicode.com/albums",true);
            //1)method , 2)Fake api link , 3)asynchronous mode ke liye true
            xhttp.send();
        }
        