
// Helper Method Recursion Design Pattern
// Bottom Recursion  Type
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