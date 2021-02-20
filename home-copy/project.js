let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

   function getID(pID){
    return document.getElementById(pID);
}

function renderQuestion(){
    test = getID("test");

    const showScore=Math.round(correct/questions.length*100);


    if(pos >= questions.length){
       
        test.innerHTML = "<h3>You got "+correct+" correct of "+questions.length+" questions</h3>";
        test.innerHTML += "<h3> Your Grade : "+showScore +"% </h3>";
        test.innerHTML +="<h4>Exam Finished in Time:" + sec+" Seconds</h4>";
        test.innerHTML += "<button onclick='EndExam()'>End the Exam</button>";
        getID("test_status").innerHTML = "<h3>Test Completed</h3>";
        pos = 0;
        correct = 0;



        clearTimeout(tim);
        //document.getElementById("endtime").innerHTML = "<h4>Finished Time:"+min+" Minutes :" + sec+" Seconds</h4>";
        document.getElementById("starttime").style.display += 'none';
        document.getElementById("showtime").style.display += 'none';
        document.getElementById("showtime").style.display += 'block';


        return false;
    }
    getID("test_status").innerHTML = "<h3>Question "+(pos+1)+" of "+questions.length+"</h3>";
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Next</button><br><br>";


}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    choice=-1;
    for(let i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}




function EndExam(){

location.href="index.html";
}


    let tim;
       let showScore=Math.round(correct/questions.length*100);
        
        let sec = 100;
        let dayTime = new Date();
        function starttime() {
            showtime();
            
            getID("starttime").innerHTML = "<h4>You started your Exam at " + dayTime.getHours() + ":" + dayTime.getMinutes()+"</h4>"; 
        }
        function showtime() {
            if (parseInt(sec) > 0) {
                let restSec = 100 - sec;
                sec = parseInt(sec) - 1;
                document.getElementById("showtime").innerHTML = "Your Left Time is :"+restSecsec+" Seconds";
                tim = setTimeout("showtime()", 1000);
            }
            else {
                if (parseInt(sec) == 0) {
                   
            document.getElementById("showtime").innerHTML = "Your Left Time is :" + sec+" Seconds";
                    if (parseInt(sec) == 0) {
                        clearTimeout(tim);
            alert("Time Up");
             window.location.href = "index.html";
                    }
                    else {
                        sec = 60;
                        
                        document.getElementById("showtime").innerHTML = "Your Left Time is :"  +  + " Seconds";
                        tim = setTimeout("showtime()", 1000);
                    }
                }

            }
        }