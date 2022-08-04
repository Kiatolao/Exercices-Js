let hour = prompt("Saisissez l'heure")


if (hour < 6 && hour >=0 ) {
    alert("Bonne nuit!");
} else if (hour < 12 && hour >= 6) {
    alert("Bonne matinée!");
} else if (hour < 18 && hour >= 12 ) {
    alert("Bonne aprèm!");
} else if (hour < 24 && hour >= 18) {
    alert("Bonne soirée!");
}
