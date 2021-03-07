function addStudentToStorage(pNewStudent){
  let students = this.getStudentFromStorage();
  students.push(pNewStudent);
  localStorage.setItem("students",JSON.stringify(students));
}

function getStudentFromStorage(){
    
   let students;
   if (localStorage.getItem("students")===null){
       students =[];
    }
    else {
        students = JSON.parse(localStorage.getItem("students"));
    } 
    return students;
}