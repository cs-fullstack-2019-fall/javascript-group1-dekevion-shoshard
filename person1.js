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
            "and press 5 or 'q' to quit.");
        if (menu === "1") {
            var num = 0;
            while (num < englishArray.length) {
                console.log((`English:${englishArray[num]}\nEspañol:${spanishArray[num]}`));
                num++;
            }
        } else if (menu === '2') {
            var num1 = 0;
            while (num1 < spanishArray.length) {
                console.log(`Español:${spanishArray[num1]}\nEnglish:${englishArray[num1]}`);
                num1++;
            }
        } else if (menu === '3') {
            addInEnglishArray();
            addInSpanishArray();
        }  else if (menu === '4') {
            addInSpanishArray();
            addInEnglishArray();
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

