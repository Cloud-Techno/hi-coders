function addStudentToUI(pNewStudent){
    students.innerHTML = createStudent(pNewStudent);
    
}

function createStudent(pList){
    
    return pList.map((item,index) =>`
    <tr>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td><a href="#" id = "${index}" class = "btn btn-success">Oturum Ac</a></td>
   </tr>
    `).join('');
}
//after add, this function will delete all in value
function clearInputs(pNameElement,pSurnameElement){
    pNameElement.value = '';
    pSurnameElement.value = '';
}
//just in case the error or missing inputs
function showAlert(type,message){
   const alert = document.createElement('div');
   alert.className = `alert alert-${type}`;
   alert.textContent = message;
   form.appendChild(alert);

   setTimeout(function(){
alert.remove();
   },1000);
    
}




























/* totalStudentElement.innerHTML = ; */   /// add student icersinde idi
    //when clicked the delete button for remove the student. showing alert
    /* function showAlertForTotal(type,message){
        const alertToList = document.createElement('div');
        alertToList.className = `alert alert-${type}`;
        alertToList.textContent = message;
        totalStudentElement.appendChild(alertToList);
     
        setTimeout(function(){
     alertToList.remove();
        },1000);
         
     } */

     /* function loadAllStudentsToUI(pStudents){
         const studentList = document.getElementById("students");
         pStudents.forEach(item => {
                studentList.innerHTML +=` <tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                  </tr>`;
             
         }).join("");
     } */