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
  answerList.push(answer); // alinan cevaplar bir array icerisine eklendi
}

console.log(answerList);
let ikiBacakToplam=0;
let tavuk =0;
let dortBacakli = 0;
let dortBacakliToplam = 0;
for(let index = 0; index<answerList.length; index++){
    if (answerList[index] === answerList[1]) {
         tavuk = parseInt(answerList[1]);
         ikiBacakToplam = tavuk * 2;
         console.log(ikiBacakToplam);
    }
    else{
        dortBacakli += parseInt(answerList[index]) * 4;
    }
   
}

console.log(ikiBacakli +dortBacakli);
