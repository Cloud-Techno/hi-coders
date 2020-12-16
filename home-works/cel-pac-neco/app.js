let questions = [
    "inek sayisini giriniz",
    "tavuk sayisini giriniz",
    "koyun sayisini giriniz",
    "domuz sayisini giriniz",
    
]

let answerList = [];

for (let index = 0; index <questions.length; index++){
  let nextQuestion = questions[index];

  let answer = prompt(nextQuestion);
  answerList.push(answer);
}
let ikiBacakli =0;
let dortBacakli = 0;
for(let index = 0; index<answerList.length; index++){
    if (answerList[index] == answerList[1]) {
         ikiBacakli = +answerList[1] * 2;
    }
    else{
        dortBacakli += parseInt(answerList[index]) * 4;
    }
   
}

console.log(ikibacakli+dortBacakli);
