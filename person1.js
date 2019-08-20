englishArray = ['Hello'];

spanishArray = ['Hola'];



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
                console.log(englishArray[num] + " " + spanishArray[num]);
                num++;
            }
        }






    }

}

main();