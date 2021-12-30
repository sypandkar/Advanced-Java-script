// console.log("Ajax in one video");

let fetchBtn = document.getElementById("fetchbtn");
fetchBtn.addEventListener("click" , buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked fetchBtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();      // created new variable n sent XMLHttpRequest
    //open the object
    xhr.open('GET','shubham.txt',true);    //([GET is for access data], [from shubham.txt file], [in asynchronous way = true])

    xhr.onprogress = function () {         //when work in progress
      // optional (just to check progress)
      // console.log("on progress");
    }

    xhr.onreadystatechange = function (){    // to see which state is in progress n which are completed
      console.log('ready state is ' , xhr.readyState);  //xhr.readyState shows number of states
    }
  // readyState code values in xhr
  // 0 UNSENT  client has been created. open() not called yet.
  // 1 OPENED  open() has been called.
  // 2 HEADERS_RECEIVED send() has been called, and headers and status are available.
  // 3 LOADING Downloading; responseText holds partial data.
  // 4 DONE The operation is complete. 

    xhr.onload = function (){                // when data load completed.
      if (this.status === 200) {             // 200 is http request code (which is condition is 'ok')
        console.log(this.responseText);
      } else{
        console.error("some error found");
      }
    };

    xhr.send();                             //send the request
}