function addAllNumbers() {
  /** Solution 1 -
   *  using ES5 syntax
   *  set arguments to an array
   *  let args = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
   * 
   */
  /** Solution 2 -
   * ES6 syntax
   * use the rest operator to turn given arguments into array
   * use foreach on the array and add every iteration to the 
   * total number
   * 
   *  let args = [...arguments];
      let total = 0;
      args.forEach(number => {
        total += number;
      });
      return total;
   * 
   */
}

function sumAllPrimes(number) {
  /** Solution 1 -
   *  
   *  let total = 0;
      function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            return false;
          }
        }
        return true;
      }

      for (let i = 2; i <= number; i++) {
        if (checkForPrime(i)) {
          total += i;
        }
      }
      return total;
   */
}

function seekAndDestroy(array, ...rest) {
  // const args = Array.from(arguments);
  // function filterArray(array) {
  //   return args.indexOf(array) === -1;
  // }
  // return array.filter(filterArray);`
  /** Solution 2 -
   * use the rest operator to turn arguments into array
   * filter the given array, return if value does not equal
   * the given targets on the second parameter
   * 
    return array.filter(value => !rest.includes(value));
   *  
   */
}

function sortByHeight(a) {
  /** Solution 1 -
   *  set an empty array for position and another one for value
   *  do a foreach loop on a given array
   *  check the values for -1, if found. push the index
   *  to the position array
   *  else, push the Value of the iteration to the value array
   *  Next, sort the array with the sort method.
   *  Subtract the previous higher value with the next one
   *  Next, Assemble back the positions
   *  Use the foreach loop on the position array
   *  check for value And index
   *  splice the sorted array where position array given position
   *  is -1
   *
   * 
   *  const positionArray = [];
      const valueArray = [];
      a.forEach((value, index) => {
        if (value === -1) {
          positionArray.push(index);
        } else {
          valueArray.push(value);
        }
      });
      const sortArray = valueArray.sort((prev, next) => prev - next);
      positionArray.forEach((value, position) =>
        sortArray.splice(positionArray[position], 0, -1)
      );
      return sortArray;
   */
}

function missingLetters(string) {
  /**
   * let compare = string.charCodeAt(0);
  let missing;

  string.split('').map((character, index) => {
    if (string.charCodeAt(index) == compare) {
      compare++;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
   */
}

function evenOddSums(array) {
  let = evenSum = 0;
  let = oddSum = 0;
  array.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))
  return [evenSum, oddSum]
}

output = evenOddSums([50, 60, 45, 71]);
console.log(output);
