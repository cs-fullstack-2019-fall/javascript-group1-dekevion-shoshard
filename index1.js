var english = ["Hello"];
var spanish = ["Hola"];
english.push("one");
spanish.push("uno");
console.log(english);


while (0===0){
    userInput = prompt("Press 1 to list all English to Spanish translations\nPress 2 to list all Spanish to English translations");
    if (userInput === "1"){
        var num = 0;
        while (num < english.length){
            console.log(english[num] + " " +spanish[num]);
            num++;
        }
    }
    else if (userInput === "2"){
        var num1 = 0;
        while (num1 < spanish.length){
            console.log(spanish[num1] + " " + english[num1]);
            num1++;
        }
    }
    else if (userInput.toUpperCase() === "Q"){
        break;
    }
    else {
        alert("INVALID ANSWER");
    }
}