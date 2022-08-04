let numberOfAnimals, typeOfAnimal;

numberOfAnimals = Number(prompt("Saisissez le nombre d'animaux"));
typeOfAnimal = prompt("Saisissez le type d'animal").toLocaleLowerCase();


if (numberOfAnimals > 1 && typeOfAnimal!=="souris") {
     document.write( `Vous avez ${numberOfAnimals} ${typeOfAnimal}s`)
} else if (numberOfAnimals == 1) {
    document.write(`Vous avez ${numberOfAnimals} ${typeOfAnimal}`)
} else if (typeOfAnimal === "souris" && numberOfAnimals > 1) {
    document.write(`Vous avez ${numberOfAnimals} souris`)
} else {
    document.write("N'importe quoi!")
}
