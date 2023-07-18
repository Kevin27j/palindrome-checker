const resultContainer = document.querySelector(".result-container");
const resultText = document.querySelector("#result-text");
const textInput = document.querySelector("#text-input");
const buttonCheck = document.querySelector("#button-check");

// Add eventListener for buttonCheck
    // Check if textInput is palindrome, return resultText "Is palidndrome"
    // else return resultText "Not palindrome"


function palindrome(str) {
    // Remove any punctuation, spaces and symbols
    let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // Reverse String
    let reverseStr = newStr.split("").reverse().join("");

    if (newStr !== reverseStr) {
        return false
    } else {
        return true
    }
}