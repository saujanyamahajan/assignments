/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
        const vowels = 'aeiouAEIOU';
        let count = 0;
    
        // Loop through each character in the string
        for (let i = 0; i < str.length; i++) {
            // If the character is a vowel, increment the count
            if (vowels.includes(str[i])) {
                count++;
            }
        }
    
        // Return the total count of vowels
        return count;
    
}

module.exports = countVowels;