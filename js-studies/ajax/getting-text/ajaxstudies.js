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