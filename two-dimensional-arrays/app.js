/* 
* Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
* Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
* Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
* Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
* Sinifin en kötü oldugu dersi gostermesi
* Tüm derslerin en iyi ögrencilerini bulmasi 
*/

const MATH_LESSON_INDEX = 1;
const GERMAN_LESSON_INDEX = 2;
const ENG_LESSON_INDEX = 3;
const BIO_LESSON_INDEX = 4;
const notes = [
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];


/**
 * Finding notes average
 * Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
 * @param {*} pLessonIndex 
 */
function findAverageNotes(pLessonIndex){
  let notesTotal = 0;
  let lessonAverage = 0;  
for (let index = 0; index < notes.length; index++){
        notesTotal += notes[index][pLessonIndex];
    }
    lessonAverage = notesTotal / notes.length;
    return lessonAverage;
}
//Showing each of lessons's average note
console.log("The Average of Mathmatic Lesson: " + findAverageNotes(MATH_LESSON_INDEX));
console.log("The Average of German Lesson: " + findAverageNotes(GERMAN_LESSON_INDEX));
console.log("The Average of English Lesson: " + findAverageNotes(ENG_LESSON_INDEX));
console.log("The Average of Biology Lesson: " + findAverageNotes(BIO_LESSON_INDEX));

/**
 * Finding students of passes notes over minimum level in any lesson
 * Herhangi bir dersden 70 puan üstü alanlarin isimleri bulmasi
 */
function filterPassNotes(pMinNote){
    let passNotes =[];
    for(students = 0; students < notes.length; students++){
        let studentsNotes = notes[students];
        let studentName = studentsNotes[0];
        for(noteCounter=1; noteCounter < students.length; noteCounter++){
            if(pMinNote <= studentsNotes[noteCounter])
            passNotes.push[studentName];
            break;
        }
    }
    return passNotes;
}


/**
 * Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
 */
function findTheBestStudents(){
    let successStudents = [];
    let mathAve = findAverageNotes(MATH_LESSON_INDEX);
    let gerAve = findAverageNotes(GERMAN_LESSON_INDEX);
    let engAve = findAverageNotes(ENG_LESSON_INDEX);
    let bioAve = findAverageNotes(BIO_LESSON_INDEX);

    for (let index=0; index < notes.length; index++){
        if(mathAve < notes[index][MATH_LESSON_INDEX]){ 
        && (gerAve < notes[index][GERMAN_LESSON_INDEX]) 
        && (engAve < notes[index][ENG_LESSON_INDEX]) 
        && (bioAve < notes[index][BIO_LESSON_INDEX]) 
            successStudents.push(notes[index][0]);
        }
    }
    return successStudents;
}

/**
 * Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
 */

 function bestLessonNote(){
     let bestNotes = findAverageNotes(1);
let lessonIndex = 0;
for (let index = 1; index<5; index++){
    if (findAverageNotes(index) > bestNotes){
        bestNotes = findAverageNotes(index);
        lessonIndex = index;
    }
}
return lessonIndex;
 }

console.log( "lesson index is : "+ lessonIndex);

function worstLessonNote(){
    let worstNotes = findAverageNotes(1);
let lessonIndex = 0;
for (let index = 1; index<5; index++){
   if (findAverageNotes(index) < worstNotes){
       worstNotes = findAverageNotes(index);
       lessonIndex = index;
   }
}
return lessonIndex;
}
console.log( "lesson index is : "+ lessonIndex);

/**
 * Tüm derslerin en iyi ögrencilerini bulmasi
 */
function findBestStudentEachLesson(lessonIndex){
    let bestStudent = null;
    let highestNote =0;
    let studentNameIndex = 0;

    for(let studentCounter =0;studentCounter<notes.length; studentCounter++){
        if (notes[studentCounter][lessonIndex] > highestNote){
            highestNote = notes[studentCounter][lessonIndex];
            studentNameIndex = studentCounter;
        }
    }
    bestStudent = notes[studentNameIndex][0];
    return bestStudent;
}