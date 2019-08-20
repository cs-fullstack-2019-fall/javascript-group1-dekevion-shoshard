englishArray = ['Hello'];

spanishArray = ['Hola'];

// function addInEnglishArray () {
//  var add = prompt("Enter the English word");
//  englishArray.push(add);
// addInSpanishArray();
// }
//
// function addInSpanishArray() {
//     var addSpanish = prompt("Enter the spanish word");
//     spanishArray.push(addSpanish);
//     addInEnglishArray();
// }



let menu;
function main() {
    while (menu !== 'q' && menu !== "5") {
        menu = prompt("Press 1 to list all English to Spanish translations \n" +
            "press 2 to list all Spanish to English translations, \n" +
            "press 3 to enter a new English translation,\n" +
            "press 4 to enter a new Spanish translation,\n" +
            "and press 5 or 'q' to quit.\n" +
            "Press 6 to search for an English word and give the Spanish translation.");
        if (menu === "1") {
            printEng();
        }
        else if (menu === '2') {
            printEsp();
        }
        else if (menu === '3') {
            addInEnglishArray();
            addInSpanishArray();
        }
        else if (menu === '4') {
            addInSpanishArray();
            addInEnglishArray();
        } else if (menu === '6') {
            engSearch();
        }
    }
}
 main();
function addInEnglishArray () {
    var add = prompt("Enter the English word");
    englishArray.push(add);
}

function addInSpanishArray() {
    var addSpanish = prompt("Enter the spanish word");
    spanishArray.push(addSpanish);
}
function printEng() {
    var num = 0;
    while (num < englishArray.length) {
        console.log(`English:${englishArray[num]}\nEspañol:${spanishArray[num]}`);
        num++;
    }
}
function printEsp() {
    var num1 = 0;
    while (num1 < spanishArray.length) {
        console.log(`Español:${spanishArray[num1]}\nEnglish:${englishArray[num1]}`);
        num1++;
    }
}

function engSearch() {
    var searching = prompt("Enter English word");
    alert(`The Spanish word for ${searching} is ${spanish[english.indexOf(searching)]}!`);
}