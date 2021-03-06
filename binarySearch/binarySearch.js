/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/


/* EVERYTHING stolen from here ,just wanted to submit a working something
https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/ */
function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(index);




/* While Loop Solution */
/*
const binarySearch = (nums, target) => {
    let min = 0;
    let max = nums.length - 1;
  let guessIndex;

  while(min <= max) {
    guessIndex = Math.floor((min + max) / 2);
    if (nums[guessIndex] === target) return guessIndex;
    if (nums[guessIndex] > target) {
      max = guessIndex - 1;
    } else {
      min = guessIndex + 1;
    }
  }

    return -1;
};

/* Recursive Solution */
/*
const binarySearch = (nums, target) => {
    let min = 0;
    let max = nums.length - 1;
  let guessIndex = Math.floor((min + max) / 2);

  const checkGuess = () => {
    if (min > max) return -1;
    if (nums[guessIndex] === target) return guessIndex;
    if (nums[guessIndex] > target) {
      max = guessIndex - 1;
    } else {
      min = guessIndex + 1;
    }
    guessIndex = Math.floor((min + max) / 2);
    return checkGuess();
  };

  return checkGuess()
};
