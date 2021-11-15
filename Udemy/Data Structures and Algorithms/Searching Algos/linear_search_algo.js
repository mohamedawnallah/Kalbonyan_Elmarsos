function linearSearch(arr, searchVal){
    // add whatever parameters you deem necessary - good luck!
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === searchVal) {
              return i;
          }
      }
      return -1;
  }