function longestWord(string) {
  /** Solution 1 -
   * convert the string to lowercase, use regular expressions
   * to get rid of symbols and turn into array with match
   * use the sort method to check comparison's length
   * return the longest one,  if a > b = a - b
   * filter the sorted array to see if there is more than one
   * word with the same amount of characters
   * if true, return array of answers, else return the value
   * of the first index
   *
   *  const stringArray = string.toLowerCase().match(/[a-z0-9]+/  g);
      const sorted = stringArray.sort((a, b) => {
      return b.length - a.length;
    });

    const longestWordArray = sorted.filter(word => {
      if (word.length === sorted[0].length) {
        return word;
      }
    });

    if (longestWordArray.length === 1) {
      return longestWordArray[0];
    } else {
      return longestWordArray;
    }
   */
}

function chunkArray(arr, len) {
  /** Solution 1 -
   * init a empty array
   * set an iterator to 0
   * use a while loop to iterate over the arrays length
   * push to the chunked array a sliced out chunk using
   * current iterator + the desired length
   * after each increment, set increment + desired length
   *
   *  const chunkedArray = [];
      let i = 0;
      while (i < arr.length) {
        chunkedArray.push(arr.slice(i, i + len));
        i += len;
      }
      return chunkedArray;
   */
  /** Solution 2 -
   * ¯\_(ツ)_/¯
   * const chunkedArray = [];
     arr.forEach(element => {
     const lastElement = chunkedArray[chunkedArray.length - 1];
     if (!lastElement || lastElement.length === len) {
      chunkedArray.push([element]);
     } else {
       lastElement.push(element);
     }
  });
    return chunkedArray;
   * 
   */
}

function flattenArray(arrays) {
  /** Solution 1 -
   * use the reduce method, a being the element and b being iteration
   * concatenate every element, with every iteration of the element
   * 
   * return arrays.reduce((a, b) => {
        return a.concat(b);
      });
   */
  /** Solution 2 -
   * use an empty array, concatenate with the apply method
   * and pass and empty array, + the given arrays
   *  fusion = [];
      return fusion.concat.apply([], arrays);
   */
  /** Solution 3 -
   * Use the spread operator with concatenate
   * 
   *  fusion = [];
      return fusion.concat(...arrays);
   */
}

function isAnagram(str1, str2) {
  /** Solution 1
   *  use a helper function to sort the given strings
   *  use regular expression to filer out symbols
   *  set to lowercase, split into array
   *  use sort default method to srt alphabetically
   *  join back into array
   *  compare the two sorted strings, if equal === anagram
   *
   *  if (formatString(str1) === formatString(str2)) {
      return true;
    } else return false;
  }

    function formatString(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join();
       */
}

function letterChanges(string) {
  /** Solution 1 -
   *  use replace method with regular expressions.
   *  for every character use the String object method
   *  to mutate the character charCodeAt value by + 1
   *  To capitalize every vowel
   *  Use regular expressions with the replace method
   *  for every selected vowel use toUpperCase()
   * 
   *    let newString = string.replace(/[a-z]/gi, character =>      {
        if (character === 'z' || character === 'Z') {
          return 'a';
        } else {
          return String.fromCharCode(character.charCodeAt() + 1);
        }
      });
      newString = newString.replace(/a|e|i|o|i/gi, vowel => {
        return vowel.toUpperCase();
      });
      return newString;
   * 
   */
}

const output = letterChanges('orangutan');
console.log(output);
