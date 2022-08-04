// ask a user a number between 1 and 3 until the answer is correct with a loop
let askNumber;

askNumber = Number.parseInt(prompt("Devinez un nombre entre 0 et 9"));

while (askNumber < 1 || askNumber > 3) {
    askNumber = Number.parseInt(prompt("Le nombre n'est pas correct!"));
    }    

alert(`${askNumber} le nombre est valide!`)