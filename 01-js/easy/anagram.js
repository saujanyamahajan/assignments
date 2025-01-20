/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// 19 jan
function isAnagram(str1, str2) {
      // Normalize by removing spaces and converting to lowercase
      const formatString = (str) => str.replace(/\s+/g, '').toLowerCase();
    
      // Return false if lengths don't match after formatting
      if (formatString(str1).length !== formatString(str2).length) {
          return false;
      }
  
      // Compare sorted strings
      return formatString(str1).split('').sort().join('') === formatString(str2).split('').sort().join('');  

}

module.exports = isAnagram;
