const sparePartList = ["cowlscreen5", "fRont ", "decklid ", " bumpeR "];

const prefixName = "KEREMAG_";
function eliminateSpace(pSparePart){
    return pSparePart.trim();
}

function changeNameToUpperCase(pSparePart){
    return pSparePart.toUpperCase();
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

sparePartList.forEach(function (pSparePart){
    let spaceEliminated = eliminateSpace(pSparePart);
    let convertToUpperCase = changeNameToUpperCase(spaceEliminated);
    let numbersEliminated = eliminateNumbers(convertToUpperCase);
    let prefixSparePart = addPrefixSparePart(numbersEliminated);
    let dateAddDate= addDate(prefixSparePart);
   
    console.log(dateAddDate);
});