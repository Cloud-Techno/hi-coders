const reader = require("xlsx");
const file = reader.readFile("./OrnekDosya.xlsx");

let database =[];

const sheets = file.SheetNames;

for (let index = 0; index < sheets.length; index++) {
    const element = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[index]]
    );
   element.forEach((rest) => {
       database.push(rest);
   }); 
}
console.log(database);