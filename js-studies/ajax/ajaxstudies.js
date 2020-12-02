

/* Returns the status-number of a request */
/* 200: "OK"
403: "Forbidden"
404: "Not Found" */
 
/* Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready */


document.getElementById("btn").addEventListener("click",function(){
    //XMLRequest

    const xhr = new XMLHttpRequest();
    xhr.onprogress = function(){
        console.log("Progress is working",this.readyState);
    }
    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText);
        }
    }

    
    xhr.open("GET","examples.txt",true);
    xhr.send();

});