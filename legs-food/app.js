const animalList = ['cow','sheep','chicken','cow','cow','sheep','cow','sheep','cow','cow','chicken'];
const chicken_leg=2;
const sheep_leg=4;
const cow_leg=4;

let numberOfCow=0,numberOfSheep=0, numberOfChicken=0;

for(let index=0;index<animalList.length;index++){
    let nextAnimal=animalList[index].toLowerCase();

    if(nextAnimal.includes('cow')){
        numberOfCow++
    }
    else if(nextAnimal.includes('sheep')){
        numberOfSheep++
    }else if(nextAnimal.includes('chicken')){
        numberOfChicken++
    }
}

let total_leg = numberOfCow*cow_leg + numberOfSheep*sheep_leg + numberOfChicken*chicken_leg;
let total_kelle_leg = numberOfCow*cow_leg + numberOfSheep*sheep_leg;
console.log(`Number of Total Legs:${total_leg}`);
console.log(`Number of Eatable Legs:${total_kelle_leg}`);
