function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let e=0; e < array.length; e++) {
    let complement = target - array[e] 
    // console.log(complement)
    for (let i=e+1; i < array.length; i++) {
      if (array[i] === complement){
        return true
    }
      }
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  This should iterate over element item in the array and check if that number
  plus any other number in the array is equal to the target number.
  If it encounters a true, it will return true, if it reaches the end of the
  array, it should move to the next number. If it reaches the end with no matches,
  it should return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
