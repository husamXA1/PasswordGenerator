generateBtn.onclick = () => {
    passwordField.value = generatePassword(charactersCount.value, hasLower.checked, hasUpper.checked, hasNumbers.checked, hasSymbols.checked);
}

copyBtn.onclick = () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Copied password to clipboard!");
}

function generatePassword(length = 4, hasLower = true, hasUpper = true, hasNumbers = true, hasSymbols = true) {
    let password = []
    while (password.length < length) {
        let choise = 1 + Math.floor(Math.random() * 4);
        switch (choise) {
            case 1:
                if (hasUpper) {
                    password.push(getRandomUpper());
                    break;
                }
            case 2:
                if (hasLower) {
                    password.push(getRandomLower());
                    break;
                }
            case 3:
                if (hasNumbers) {
                    password.push(getRandomNumber());
                    break;
                }
            case 4:
                if (hasSymbols) {
                    password.push(getRandomSymbol());
                }
                break;
            default:
                password.push(getRandomLower());
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