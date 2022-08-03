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
