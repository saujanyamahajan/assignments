/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Return true if the string is equal to its reverse, false otherwise
    return formattedStr === formattedStr.split('').reverse().join('');  
}

module.exports = isPalindrome;
