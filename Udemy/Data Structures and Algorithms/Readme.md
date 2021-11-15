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

🚀 How do you improve Problem Solving Methodology:
    - Devise a plan for solving problems
    - Master Common Problem Solving Patterns

🚀 Problem Solving Steps:
    - `Understand` the Problem
    - `Explore` Concrete Examples
    - `Break` It Down
    - `Solve` / `Simplify`
    - `Look` Back, and Refactor

🚀 Understanding The Problem:
    - Can I `Restate` the problem in my own words?
    - What are the `inputs` that go into my problem?
    - What are the `outputs` that should come from solution
    - Can The `Outputs` be `determined` from the `inputs`?
        (i.e: Do I have enough information to solve the problem)
    - How Should I `label` the important pieces of data that is part of   the problem

🚀 Edge Cases searching for testing outlier functionality

🚀 Concrete Examples:
    - Start with `Simple` Examples
    - Progress to More `Complex` Examples
    - Explore Examples with Empty Inputs (`EdgeCases`)
    - Explore Examples with Invalid Inputs (`Validation` and Sanitization)

🚀 Break It Down:
    - Explicitly Write Down the step you're gonna take
    - Writing `Pseudo Code`

🚀 `Solve The Problem if you can't Solve A Simpler Problem!` 
    Don't Put all your eggs in one place

🚀 Simplify:
    - Find the core difficulty in what you're trying to do
    - `Temporarily` `ignore` that difficulty
    - Write` a simplified solution`
    - Then incorporate that difficulty back in

🚀 Refactoring Questions:
    - Can you `check` the `result` ?
    - Can you `derive` the result `differently` ?
    - Can you `understand` it at a glance ?
    - Can you use the result or method for some other problem ?
    - Can you `improve` the `performance` of your solution ?
    - How have other `people` `solved` this `problem` ?

🚀 Reconsolidation of Pre-Increment or Post-Increment:
 b = ++ x :
 
 x++ 
 b = x

 b = x++

 b = x
 x++

🚀 Some Problem Solving Patterns:
    - Frequency Counter
    - Multiple Pointers
    - Sliding Window
    - Divide and Conquer 
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
    - Many More ...!

🚀 Frequency Counter Problem Solving Pattern uses objects or sets to collect `values`
   / `frequencies` of values.
   This can often avoid the need of `nested for loops O(N**2)` operations
   with arrays / strings

🚀 Reconsolidation of Splice

🚀 Anagram is a word, phrase, or a name formed by rearranging letters of another such as cinema -< iceman
    Valid Anagram :
        - Same `length`
        - Same `Frequency`

🚀 Multiple Pointers :
     - Creating `Pointers` or `values` that correspond to an `index` or `position`, and move towards the beginning, end or middle based on a `certain condition`.
     - Very Efficient for solving problems with `minimal space complexity` as well.

🚀 Sliding Window:
    - This pattern Involves creating a window which can either be an `array` or `number` from one position to another
    - Depending on a certain condition, the window either increases or closes (and a new window is created)
    - ```Very Useful for keeping track of a subset of data in an array/string etc```
    - e.g: Searching for longest sequence of unique characters in string

🚀

🚀

🚀

🚀

🚀

🚀

🚀

🚀

🚀

🚀

🚀