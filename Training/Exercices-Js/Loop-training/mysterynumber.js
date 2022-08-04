// user have to pick a number until he finds -1
// Then show the highest number he picked up
// ex: 7 9 13 34 6 2
// highestNumber = 34

let randomNumber;
let highestNumber = -1;

randomNumber = Number.parseInt(prompt("Find the mystery number"));

while (randomNumber !== -1) {
    randomNumber = Number.parseInt(prompt(`Unfortunatly ${randomNumber} is not the mystery number, try again`));
    console.log(randomNumber)

    if (highestNumber < randomNumber) {
        highestNumber = randomNumber
    } 
}

alert(`Good job the mystery number was -1 and the highest number you entered was ${highestNumber}`);