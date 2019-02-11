/**
 * @TODO - Reverse a String
 */
function reverseString(string) {
  /** Solution 1 -
  *   use Reverse Method
  *   return string
      .split('')
      .reverse('')
      .join('');
   */
  /** Solution 2 -
   *  use decrement For Loop
   *  let revString = '';
      for (let i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
      }
      return revString;
   */
  /** Solution 3 - 
   *  incrementing loop
  *   let revString = '';
      for (let i = 0; i <= string.length - 1; i++) {
        revString = string[i] + revString;
      }
      return revString;
    */
  /** Solution 4 - 
   *  use ES6 For Of loop
   *  let revString = '';
      for (const character of string) {
        revString = character + revString;
    }
      return revString;
   */
  /** Solution 5 - 
   *  use forEach
   *  let revString = '';
      string.split('').forEach(character => (revString = character + revString));
      return revString;
   */
  /** Solution 6 - 
   *  Use reduce method
    * return string
      .split('')
      .reduce((revString, character) => character + revString, '');
 */
}

function isPalindrome(str) {
  /** Solution 1 - 
    * reverse string, compare to origin
    * const revString = str
      .split('')
      .reverse()
      .join('');
      return revString === str;
   */
}

function reverseInteger(int) {
  /** Solution 1 -
   * turn to string, split into array, reverse.
   * const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');
    return parseInt(revString) * Math.sign(int);
   */
}

function capitalizeLetters(string) {
  /** Solution 1 -
   *  turn sentence into array via split
   *  use for loop to iterate over every word
   *  use substring to select the first letter
   *  use uppercase to transform, put it all back together
   *  const stringArray = string.toLowerCase().split(' ');
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].substring(1);
      }
      return stringArray.join(' ');
   */
  /** Solution 2 - 
   * use map method, select first char in array
   * return string
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
    */
  /** Solution 3 - use replace method with Regular Expressions
     * return string.replace(/\b[a-z]/gi, character => {
        return character.toUpperCase();
      });
     */
}

function maxCharacter(string) {
  /** Solution 1
   *  make a character map object aka Matrix
   *  define variables for max number, max character and unique
   *  turn string into array, then use foreach
   *  check if add an integer for every character
   *  if character repeats, add 1 else set default to 1
   *  loop through the character map object with (for in)
   *  if character appears more than once, set the maxNum
   *  variable to that amount
   *  set the maxChar variable to the character that has
   *  the maximum number
   *
   *  Check if Unique.
   *  if maxNum variable is greater than 1, return false;
   * 
   *  const charMap = {};
      let maxNum = 0;
      let maxChar = '';
      let isUnique;
      string.split('').forEach(function(char) {
        if (charMap[char]) {
          charMap[char]++;
        } else {
          charMap[char] = 1;
        }

        for (let char in charMap) {
          if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
          }
          if (maxNum > 1) {
            isUnique = false;
          } else {
            isUnique = true;
          }
        }
      });
      return {
        unique: isUnique,
        maxCharacter: maxChar
      };
   */
}

function fizzBuzz() {
  /** Solution 1 -
   *  iterate 100 times for ever iteration,
   *  check if the iteration number modulus equals to 0
   *  for 3,5 and 15
   *
   *  for (let i = 0; i <= 100; i++) {
      if ((i % 3 === 0 && i % 5 === 0) || i % 15 === 0) {
        console.log('FizzBuzz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      }
      console.log(i);
  }
   */
}

// Function Call Print to Console
const output = fizzBuzz();

console.log(output);
