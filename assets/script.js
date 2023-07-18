const resultContainer = document.querySelector(".result-container");
// const resultText = document.querySelector("#result-text");
const textInput = document.querySelector("#text-input");
const buttonCheck = document.querySelector("#button-check");

// Function to check for palindrome strings
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

// Check if input string is palindrome when button is clicked
buttonCheck.addEventListener("click", () => {
    // Create a new <h4> element with result text, and append to parent container
    // Make sure to append new element only if it doesn't already exist
    let result = document.querySelector("#result-text");
    if(!result){
        result = document.createElement("h4");
        result.setAttribute("id", "result-text");
        resultContainer.appendChild(result);
    }

    // Check if textInput is palindrome, return resultText "Is palindrome"
    if(palindrome(textInput.value)){
        result.innerText = "Is palindrome";
    } else {
        // else return resultText "Not palindrome"
        result.innerText = "Not palindrome";
    }
})
