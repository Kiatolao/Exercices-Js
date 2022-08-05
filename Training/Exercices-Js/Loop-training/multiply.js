// User choose a round number
// Show multiplication table from this number

let multiplyNumber;
let table;

multiplyNumber = Number.parseInt(prompt("Choose a number to see his multiplication table"));

for (let i = 1; i <= 10; i++){
    table = multiplyNumber * i;
    document.write(`${multiplyNumber} * ${i} = ${table} <br>`);
}