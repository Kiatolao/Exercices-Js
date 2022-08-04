// exo - do 4 roud-abouts
for (let t =0; t <4; t++) {
    console.log (t);
}
console.log("----------------")

// show numbers from 1 to 20 in console
for (let i = 1; i <= 20; i++){
    console.log(i);
}
console.log("----------------")

// show number from 12 to 24 in console
for (let n=12; n <= 24; n++) {
    console.log(n);
}
console.log("----------------")

// show numbers from 0 to 15 3 by 3.
for (let x = 0; x <= 15; x += 3){
    console.log(x);
}
console.log("----------------")

// loop into loop
for(let i= 1; i <= 3; i++) {
    console.log(`${i} Going here`);
    for(let n = 1; n <= 3; n++){
        console.log(`${n} Going right there`)
    }
}

console.log("----------------")

// Café
let question = prompt("Voulez-vous un café? Reponse O pour oui, N pour non");

while(question !=="O" || question !=="N") {
    if (question === "O") {
        alert("Très bien! je vous sers un café.");
        break;
    } else if (question === "N") {
        alert("Fromage!");
        break;
    } else {
        question = prompt("Répondez par O ou N!");
    }
}
