

 // Getting elements from UI 
 const form = document.getElementById("student-form");
 const nameElement = document.getElementById("student-name");
 const surnameElement = document.getElementById("student-surname");
const registerCard = document.getElementById("register-card");
const allStudentListElement = document.getElementById("all-students-list");
const totalStudentElement = document.getElementById("total-student");
const students = document.getElementById("students");
const btn = document.getElementById("endexam");

// all events in this function
allEventListener();

 function allEventListener(){
     form.addEventListener("submit",addStudent);
     allStudentListElement.addEventListener("click",startSession);
    
 }

 //Create new Student Object
 function Student (name,surname,puan){
    this.name = name;
    this.surname = surname;
    this.puan = puan;
}
// Registred students list array
let studentList =[];

// Add the value of students informations 
function addStudent(e){
    // Get value of Students Information
    const name = nameElement.value.trim(); // regulate the input value what if there is scape
    const surname = surnameElement.value.trim();

    //If input is empty then let the User know
    if(name ==="" || surname===""){
       showAlert('danger',"Please fill all information");
    }
    else{
        //Create new Student Object
        const newStudent = new Student(name,surname);

         // create student list array and then push to new student's information
        studentList.push(newStudent);
        //creat students on the UI
        addStudentToUI(studentList); 
        //add student list to LocalStorage
       addStudentToStorage(newStudent);
        showAlert('success',"Successfully")
        
    }
//clear all input value after added
clearInputs(nameElement,surnameElement);

e.preventDefault();
}

// If User click the Delete Button , Student will remove from Registration List
function startSession(e){
    let clickedStudentToSession = e.target;
    
    if(clickedStudentToSession.className ==="btn btn-success"){
       // window.addEventListener("load", renderQuestion, false);
    displayQuiz(questions);
    renderQuestion();
    addStudentToUI(studentList);
 }
 }

function displayQuiz(questions) {
  const secilenID = document.getElementById("questions");
  if (secilenID.style.display == "none") {
    secilenID.style.display = "";
  } else {
    secilenID.style.display = "none";
  }
}