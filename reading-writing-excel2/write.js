const reader = require('xlsx') 
const data = require('./data')
  
// Reading our test file 
const file = reader.readFile('./OrnekDosya.xlsx') 
  
const ws = reader.utils.json_to_sheet(data) 
  
reader.utils.book_append_sheet(file,ws,"Sheet4") 
  
// Writing to our file 
reader.writeFile(file,'./OrnekDosya.xlsx')
