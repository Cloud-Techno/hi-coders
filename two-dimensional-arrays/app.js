/* 
* Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
* Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
* Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
* Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
* Sinifin en kötü oldugu dersi gostermesi
* Tüm derslerin en iyi ögrencilerini bulmasi 
*/

const MATH_LESSON_INDEX = 1;
const GERMAN_LESSON_INDEX = 1;
const ENG_LESSON_INDEX = 1;
const BIO_LESSON_INDEX = 1;

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

//Finding notes average

function findAverageNotes(pLessonIndex){
  let notesTotal = 0;
  let lessonAverage = 0;  
for (let index = 0; index < notes.length; index++){
        notesTotal += notes[index][pLessonIndex];
    }
    lessonAverage = notesTotal / notes.length;
    return lessonAverage;
}

console.log("The Average of Mathmatic Lesson: " + findAverageNotes(MATH_LESSON_INDEX));
console.log("The Average of German Lesson: " + findAverageNotes(GERMAN_LESSON_INDEX));
console.log("The Average of English Lesson: " + findAverageNotes(ENG_LESSON_INDEX));
console.log("The Average of Biology Lesson: " + findAverageNotes(BIO_LESSON_INDEX));
////////
//Finding  passes notes in any lesson
 
function filteringPassNotes(pMinNote){
    let passNotes =[];
    for ()





}