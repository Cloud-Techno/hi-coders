document.getElementById("convert").addEventListener("click",convert);

function convert (){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest"); // default value is true. that s why We dont need to use "True"

    xhr.onload = function(){
        if (this.status){
            const response = JSON.parse(this.responseText);
            const rate = response.rates.CHF;
            const eu = document.getElementById("eu").value;
            document.getElementById("chf").value = eu * rate;
      
    }
}

    xhr.send();
}