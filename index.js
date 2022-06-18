// Runtime: 0(n)

function hasTargetSum(array, target){
  const seenNumbers = {};

  for (const number of array){
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

// Runtime: 0(n*2)
  //function hasTargetSum(array, target) {
    //iterate through each number in the array
    //for (let i = 0; i < array.length; i++) {
      // for the current num, identify a complement that adds to the target(comp = target - num) 
      //const complement = target - array[i];
          //iterate through the rest of the array
      //for (let j = i + 1; j < array.length; j++) {
        // check if any number is our complement
        // if so, return true
        //if (array[j] === complement) return true;
      //}
    //}
    // If I reach the end of the array, return false
    //return false;
  //}

  //0(1) runtime
  function findSock(array) {
    for (const item of array) {
      if (item === "sock") return "sock";
    }
  }
  
  // O(1) runtime
  function findSock(object) {
    if (object.sock) return "sock";
  }

/* 
  Write the Big O time complexity of your function here
  Runtime :0(n*2)
  Space:0(n)
/*
  hasTargetSum([1,2,3,4]6)
  seenNumbers = {
    1: true
    2: true
    3: true
  }

 create an object to keep track of numbers I have already seen
 iterate through each number in the array
   for the current num, identify a complement that adds to the target (comp = target - num)
 check if any key on our object is the complement
   if so, return true
   otherwise, add that number to the object

   if I reach the end of the array, return false
/* 
  Add your pseudocode here
*/
//iterate over the array of numbers
 // for the current number, identify a complementary number that adds to our target
  //(for example: if our number is 2, and the target is 5, the complementary number is 3)
  //iterate over the remaining numbers in the array
    //check if any of the remaining numbers is the complement
      //if so, return true
//if we reach the end of the array, return false

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
