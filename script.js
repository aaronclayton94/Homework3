
var enter;
var confirmNumbers;
var confirmSymbols;
var confirmUpper;
var confirmLower;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "a", "y", "z"];

space = [];

var choices;

var toUpper = function (a) {
    return a.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});


function generatePassword() {
    enter = Number(prompt("Choose password length between 8 and 128"));
    if (!enter) {
        alert("Choose between 8 and 128! Try again!");
    } else if (enter < 8 || enter > 128) {
        enter = Number(prompt("Choose between 8 and 128! Try again!"));
    } else {
        confirmNumbers = confirm("Contain numbers?");
        confirmSymbols = confirm("Contain special characters?");
        confirmUpper = confirm("Contain Uppercase letters?");
        confirmLower = confirm("Contain Lowercase letters?");
    };

    if (!confirmSymbols && !confirmNumbers && !confirmUpper && !confirmLower) {
        choices = alert("You must select at least one!");

    }
    else if (confirmSymbols && confirmNumbers && confirmUpper && confirmLower) {
        choices = character.concat(number, lowerCase, upperCase);
    }

    else if (confirmSymbols && confirmNumbers && confirmUpper) {
        choices = character.concat(number, upperCase);
    }
    else if (confirmSymbols && confirmNumbers && confirmLower) {
        choices = character.concat(number, lowerCase);
    }
    else if (confirmSymbols && confirmLower && confirmUpper) {
        choices = character.concat(lowerCase, upperCase);
    }
    else if (confirmNumbers && confirmLower && confirmUpper) {
        choices = number.concat(lowerCase, upperCase);
    }

    else if (confirmSymbols && confirmNumbers) {
        choices = character.concat(number);

    } else if (confirmSymbols && confirmLower) {
        choices = character.concat(lowerCase);

    } else if (confirmSymbols && confirmUpper) {
        choices = character.concat(upperCase);
    }
    else if (confirmLower && confirmNumbers) {
        choices = lowerCase.concat(number);

    } else if (confirmLower && confirmUpper) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumbers && confirmUpper) {
        choices = number.concat(upperCase);
    }

    else if (confirmSymbols) {
        choices = character;
    }
    else if (confirmNumbers) {
        choices = number;
    }
    else if (confirmLower) {
        choices = lowerCase;
    }

    else if (confirmUpper) {
        choices = space.concat(upperCase);
    };


    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var pw = password.join("");
    UserInput(pw);
    return pw;
}

function UserInput(pw) {
    document.getElementById("password").textContent = pw;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
