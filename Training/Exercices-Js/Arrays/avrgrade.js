// Creat en array [9]
// Ask user to fill 9 notes inside it
// Calculte the average grade

let notes = [];
let score;
let averageScore =0;
let bestScore=0;

for (let i = 0; i < 9; i++) {
    score = Number(prompt("Please enter a score"));
    notes.push(score);
    averageScore += score;
    // or notes[i] =  Number(prompt("Please enter a score"));
    // averageScore += notes[i];
    if (bestScore < score) {
        bestScore = score
    }
}
console.table(notes);
console.log(averageScore);
document.write(`The average score is ${(averageScore/notes.length).toFixed(2)}`);
console.log(bestScore);

