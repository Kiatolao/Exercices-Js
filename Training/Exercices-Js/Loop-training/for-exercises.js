// Ask a round number from user
// Show the next 10 numbers from there
// ex: user set 17
// show numbers from 18 to 27

let userNumber = Number.parseInt(prompt("Choose any round number"));

for (let i = userNumber+1; i <= userNumber+10; i++) {
    
    console.log(i);
}