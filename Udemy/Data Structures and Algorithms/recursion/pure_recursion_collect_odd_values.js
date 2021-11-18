/*
 collectOddValues([10, 13, 8, 5])
        return newArr.concat(collectOddValues([13,8,5]))
                             return newArr.concat(collectOddValues([8,5])
                                                  return newArr.concat(collectOddValues([5])
                                                           [5]
                                                                       return newArr.concat(collectOddValues([])
                                                                                            return []
*/

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !==0 ) {
        newArr.push(arr[0]);
    }
   newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}

console.log(collectOddValues([10, 13, 8, 5]))