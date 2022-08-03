//Dice
const roll = Math.floor (Math.random () * 6 + 1);
console.log (roll);

//exo-1
let catNumber= 2;
let partnerName ="Enora";
let locationPl = "Chateaubriant";
let jobTitle = "Web dev";

console.log(`You will be a ${jobTitle} in ${locationPl}, and married to ${partnerName} with ${catNumber} cats.`);

//exo-2

let currentAge = 38;
let maxAge = 150;
let estimateTeaPerDay = 3;
let numberTea = ((maxAge - currentAge) * 365) * 3;

console.log("You'll drink " + numberTea + " for the rest of your life, if you live up to " + maxAge + " years old!" )

//exo-3

let celciusTemp = 25;
let convertToFahreneit = Math.floor((celciusTemp/5*9) + 32);
let fahreneit = 90;
let convertToCelcius = Math.floor((5/9) * (fahreneit-32));

console.log(`${celciusTemp} °C équivaut à ${convertToFahreneit} °F`);
console.log(`${fahreneit} °F équivaut à ${convertToCelcius} °C`);