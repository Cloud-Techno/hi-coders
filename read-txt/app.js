const fs = require('fs');

 fs.readFile("./files/exp.txt","utf8",function(error,data){
     console.log(data);
 });
