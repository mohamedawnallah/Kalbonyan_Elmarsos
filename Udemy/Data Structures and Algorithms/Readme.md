# Javascript Algorithms and Data Structures Masterclass

🚀 Javascript Snippets Chrome

🚀 Big O Notation like `Richter Scale` but numerical representation

🚀 Big O Notation useful for;
    -How our code Performs?
    -Discussing Trade-offs between different approaches
    -Identify Inefficient Points

🚀 What Does Better Mean In Code:
    - Faster (Through Timing Functions)
    - Less memory Intensive
    - More Readable

🚀 The Problem with Timing Code :
    - Different Machines Will Record Different Times
    - The Same Machine Will record time different times
    - For fast algorithms, speed measurements may not be precise enough?
     So What is the solution NOW?

🚀 Rather Than `counting seconds` which are so `variable`, Let's count the `number` of simple `operations` that computer has to perform

🚀 Counting Operations instead of Recording Time

🚀 Big O Notation allows us to taks formally about how the runtime of an algorithm grows (Number of Operations) as The Inputs Grow

🚀 In Calculus, It is often to see log of base 10 but it is not found
   In Computer Sciecne, It is often to see log of base 2 but it is not found
   (So it is changing according to the context where it is in)

🚀 Logarithm is all asking about the `power` itself when base is ... and the result is ...

🚀 Rule of Thumbs in Big O Notation:
    - Constants Don't Matter
    - Smaller Terms Don't Matter

🚀 Big O Shorthands:
    - Arithmetic Oprations are Constant
    - Variable Assignment is Constant
    - Accessing Elements in an array by index or object by key is constant
    - In a loop, the complexity is the length of loop (input grows -< Number of operations required grow)

🚀 We can use Big O Notation also to analyze space Complexity
   How much additional memory do we need to allocate in order 
   to run the code in our algorithm

🚀 `Auxiliary Space Complexity` to refer to space required by
   the algorithm, not including space taken up by inputs Growing

🚀 Rules of Thumb in Space Complexity:
    - Most `Primitives` (booleans, numbers, undefined, null) are `constant space`
    - `String` require `O(n)` space (where n is the string length)
    -  `Reference Types` are generally `O(n)`, Where n is the length(for arrays) or rthe number of keys (for objects)
    

🚀 Logarithm is the inverse of exponentiation -< log base 2 of 8 equals three

🚀 The most common Logarithm in Computer Science is `Binary Logarithm`

🚀 Rule of Thumb according to Logarithm:
    The Logarithm of a number roughly measures the number of times you can divide that number by 2 (Halfing) before you get a value that's less than or equal to one

🚀 Big O of Objects :
    ```When you don't need any ordering, objects are an excellent choice```
    Insertion -< O(1)
    Removal -< O(1)
    Searchin -< O(n)
    Access -< O(1)
🚀 Big O of Object Methods:
    - Object.keys -< O(N)
    - Object.value -< O(N)
    - Object.entries -< O(N)
    - Object.hasOwnProperty -< O(N)

🚀 Arrays are ordered Unlike Objects

🚀 Big O of Arrays:
    - Insertion -< It depends (Insert first or medium O(N) otherwise it is O(1))
    - Removal -< It depends (Remove first or medium O(N) otherwise it is O(1))
    - Searching -< O(N)
    - Access -< O(1)

🚀 Big O of Array Methods

🚀