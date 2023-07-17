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