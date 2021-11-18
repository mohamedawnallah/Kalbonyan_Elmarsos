
// Helper Method Recursion Design Pattern
// Bottom Recursion  Type

//With Space Complexity : O(N)

function collectOddValues(arr) {
   let oddResults = []

   function helper(helperInput) {
       if (helperInput.length === 0) {
           return;
       }
       if (helperInput[0] % 2 !==0) {
           oddResults.push(helperInput[0]);
       }
       helper(helperInput.slice(1))
   }
   helper(arr);

   return oddResults;
}

console.log(collectOddValues([10, 13, 15, 20, 22]));


// With Space Complexity : O(1)

function collectOddValues(arr) {
    let oddResults = {}
 
    function helper(helperInput) {
        let firstVal = helperInput[0];
        if (helperInput.length === 0) {
            return;
        }
        if (firstVal % 2 !==0) {

            oddResults[firstVal] = firstVal;
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
 
    return oddResults;
 }
 
 console.log(collectOddValues([10, 13, 15, 20, 22]));