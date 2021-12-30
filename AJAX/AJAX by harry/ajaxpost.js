//console.log("hii shubham");

//console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click" , buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");

    const xhr = new XMLHttpRequest();        // created new variable n sent XMLhttp request
    xhr.open ('POST','http://dummy.restapiexample.com/api/v1/create',true); // to post function link taken from https://dummy.restapiexample.com/
    xhr.getResponseHeader('Content-type' , 'application/JSON');  //The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular header's value.

    // xhr.onprogress = function(){                         //When work in progress  
    // //optional (just to check the progress)
    // console.log("on progress");
    // };

    // xhr.onreadystatechange = function() {                // to see which state is in progress n which is completed
    //     console.log('ready-state is' , xhr.readyState);  //xhr.readyState shows number of states 
    // }
    // // readystate code values in xhr
    // //    0	UNSENT	Client has been created. open() not called yet.
    // //   1	OPENED	open() has been called.
    // //   2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    // //   3	LOADING	Downloading; responseText holds partial data.
    // //   4	DONE	The operation is complete.

    xhr.onload = function(){                     // when data load completed
        if (this.status === 200){                 //  200 is http request code (which is condition is 'ok' )
            console.log(this.responseText);    
        }else{
            console.log("some error found");
        }
    };
    params = `{"name":"test124","salary":"124","age":"24"}`;     // we copied this sample json from https://dummy.restapiexample.com/create -> details & then edited it to post. 
    xhr.send(params);
    console.log("We are done!");
}



