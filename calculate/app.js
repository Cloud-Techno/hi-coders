let numbers = [ 3,5,7,19,4,12,1];


// find out square value in Array
for (let index =0; index<numbers.length; index++){
    let squareNumbers = Math.sqrt(numbers[index]);
    console.log("in Array" + (index+1)+'. number square is '+ squareNumbers);
}

// find out pow value in Array
for (let index =0; index<numbers.length; index++){
    let powNumbers = Math.pow(numbers[index], 2);
    console.log("in Array" + (index+1)+'. number pow= '+ powNumbers);
}

// find out sum in Array's values
let sumNumbers = 0;
for (let index =0; index<numbers.length; index++){
    sumNumbers += numbers[index];
    console.log("Numbers of Array sum = "+ sumNumbers);
}

// find out average value in Array Numbers
    let average = sumNumbers / numbers.length;
    console.log('Average is in Array = ' + average);

   
   //Min and Max Numbers in Array
    let min = numbers[0];
    let max = numbers[0];

for (let index =0; index<numbers.length; index++){
    if (numbers[index] < min){
            min = numbers[index];
    }
    

    if (numbers[index] > max){
        max = numbers[index];
}

}
console.log(" Minumum number is in Array= " + min);
console.log(" Maximum number is in Array= " + max);