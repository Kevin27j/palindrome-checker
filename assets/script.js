const resultContainer = document.querySelector(".result-container");
const resultText = document.querySelector("#result-text");
const textInput = document.querySelector("#text-input");
const buttonCheck = document.querySelector("#button-check");
console.log(textInput.textContent)

// Add eventListener for buttonCheck
buttonCheck.addEventListener("click", () => {
    // Check if textInput is palindrome, return resultText "Is palindrome"
    if(!palindrome(textInput.textContent)){
        resultText.innerText += "Not palindrome";
    } else {
        // else return resultText "Not palindrome"
        resultText.innerText += "Is palindrome";
    }
})



function palindrome(str) {
    // Remove any punctuation, spaces and symbols
    let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // Reverse String
    let reverseStr = newStr.split("").reverse().join("");

    if (newStr !== reverseStr) {
        return false;
    } else {
        return true;
    }
}