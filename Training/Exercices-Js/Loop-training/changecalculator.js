// ask user a round number between 1 and 99
// convert this number into euro change with 
// ex: user type 99 =
// 1 banknote of 50 euros
// 4 banknotes of 10 euros
// 1 bankenote of 5 euros
// 4 coins of 1 euro

let numberToConvert;
let fiftyBK;
let tenBK;
let fiveBK;
let coin;


numberToConvert = Number.parseInt(prompt("Pick a round number between 1 and 99 you want to convert into change"));

while (numberToConvert >= 1 && numberToConvert <= 99) {
    if (numberToConvert >= 50) {
        numberToConvert = numberToConvert / 50;
        fiftyBK = Math.floor(numberToConvert);
        numberToConvert = (numberToConvert - fiftyBK) * 50;
    } else {
        fiftyBK = 0;
    }

    if (numberToConvert >= 10 && numberToConvert < 50) {
        numberToConvert = numberToConvert / 10 ;
        tenBK = Math.floor(numberToConvert);
        numberToConvert = (numberToConvert - tenBK)* 10;
    } else {
        tenBK = 0;
    }

    if ( numberToConvert >= 5 && numberToConvert < 10) {
        numberToConvert = numberToConvert / 5;
        fiveBK = Math.floor(numberToConvert);
        numberToConvert = (numberToConvert - fiveBK) * 5;
    } else {
        fiveBK = 0;
    }

    if (numberToConvert > 0 && numberToConvert < 5) {
        coin = Math.round(numberToConvert / 1);
    } else {
        coin = 0;
    }

    alert(` You will have ${fiftyBK} bill of 50 euros, ${tenBK} bill of 10 euros, ${fiveBK} bills of 5 euros and ${coin} coins of 1 euro `);
    break;
} 

