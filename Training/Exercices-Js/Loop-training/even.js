// show even numbers from a user number
//ex 3 -> 0, 2

let userNumber;

userNumber = Number.parseInt(prompt("Choose a number to see his even numbers"));

for (let i = 0; i <= userNumber; i += 2){
    document.write(`${userNumber} -> ${i} <br> `);
}