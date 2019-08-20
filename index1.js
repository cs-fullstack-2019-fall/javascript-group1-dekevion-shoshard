var english = ["Hello"];
var spanish = ["Hola"];
english.push("one");
spanish.push("uno");

function printEng() {
    var num = 0;
    while (num < english.length) {
        console.log(`English:${english[num]}\nEspañol:${spanish[num]}`);
        num++;
    }
}
function printEsp() {
    var num1 = 0;
    while (num1 < spanish.length) {
        console.log(`Español:${spanish[num1]}\nEnglish:${english[num1]}`);
        num1++;
    }
}

function main1() {
    while (0 === 0) {
        userInput = prompt("Press 1 to list all English to Spanish translations\nPress 2 to list all Spanish to English translations\nPress 5 or 'q' to quit");
        if (userInput === "1") {
            printEng();
        }
        else if (userInput === "2") {
            printEsp();
        }
        else if (userInput.toUpperCase() === "Q" || userInput === "5") {
            break;
        }
        else {
            alert("INVALID ANSWER");
        }
    }

}

main1();