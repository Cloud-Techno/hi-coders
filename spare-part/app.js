const sparePartList = ["cowlscreen5", "fRont ", "decklid ", " bumpeR "];

const prefixName = "KEREMAG_";
function eliminateSpace(pSparePart){
    return pSparePart.trim();
}

function changeNameToUppercase(pSparePart){
    return pSparePart.toUppercase();
}

function splitArray(pSparePart){
    return pSparePart.split("");
}
function elimateNumbers(pSparePart){
    return pSparePart.replaceAll(/[0-9]/, "");
}

function addPrefixSparePart(pSparePart){
    return prefixName.concat(pSparePart);
}

function addDate(pSparePart){
    let date = new Date().toDateString("en");
    return date.replaceAll(" ","");
}

sparePartList.forEach(function(pSparePart){
    let spaceEliminated = eliminateSpace(pSparePart);
    let splitNameArray = splitArray(spaceEliminated);
    let convertToUpperCase = changeNameToUppercase(splitNameArray);
    let numbersEliminated = eliminateNumber(convertToUpperCase);
    let prefixSparePart = addPrefixSparePart(numbersEliminated);
    let dateAddDate= addDate(prefixSparePart);
   
    console.log(dateAddDate);
});