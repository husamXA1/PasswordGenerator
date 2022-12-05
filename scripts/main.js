generateBtn.onclick = () => {
    passwordField.value = generatePassword(charactersCount.value, hasLower.checked, hasUpper.checked, hasNumbers.checked, hasSymbols.checked);
}

copyBtn.onclick = () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Copied password to clipboard!");
}

function generatePassword(length = 4, hasLower = true, hasUpper = true, hasNumbers = true, hasSymbols = true) {
    let password = []
    // All functions for generating
    let functions = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    };
    // The functions selected by the user are filtered here
    let usedFunctions = [];
    if (hasLower) usedFunctions.push("lower");
    if (hasUpper) usedFunctions.push("upper");
    if (hasNumbers) usedFunctions.push("number");
    if (hasSymbols) usedFunctions.push("symbol");
    // Generating random password from the functions selected by the user
    while (password.length < length) {
        if (usedFunctions.length == 0) {
            password.push(functions.lower());
        } else {
            let choise = Math.floor(Math.random() * usedFunctions.length);
            password.push(functions[usedFunctions[choise]]());
        }
    }
    return password.join("");
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(48 + Math.random() * 10));
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(65 + Math.random() * 26));
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(97 + Math.random() * 26));
}
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(33 + Math.random() * 15));
}
