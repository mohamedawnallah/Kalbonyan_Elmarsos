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

🚀 Divide and Conquer Problem Solving Pattern:
     = This pattern involves `dividing` a `data set` into `smaller chunks`
     and then repeating a `process` with a subset of data.
     = This pattern can tremendously decrease time complexity

🚀 Linear Search Time Complexity is O(N)

🚀 Objectives Searching Section:
      -Describe what `a searching algorithm `is
      -Implement `linear search` on arrays
      -Implement `binary search` on sorted arrays
      -Implement `a naive string searching algorithm`
      -Implement `KMP string searching algorithm`

🚀 How do we search intially?
     Given an array, the simplest way to search for an value is to 
     look at every element in the array and check if it is the value we wanna it

🚀 There are many different search methods on arrays in javascript:
    -indexOf()
    -includes()
    -find()
    -findIndex()
    how do these functions work?

🚀 In Linear Search Algorithm we can start from beginning and move
   forward or start from the end and move backward

🚀 Big O Notation Time Complexity for Linear Search depends
   on the case :
   Best Case: O(1)
   Average Case: O(N)
   Worst Case : O(N)

🚀 Binary Search only works on sorted Arrays 
   Halfing Items

🚀 Binary Search:
    Worst Case: O(log N)
    Average Case: O(Log N)
    Best Case: O(1)

🚀 What is Sorting ?
    Sorting is the process of rearranging the items
    in a collection (e.g. an array) so that the items
    are in some kind of order

    e.g:
     - Sorting Numbers from `smallest to largest`
     - Sorting names `alphabetically`
     - Sorting movies based on `release year`

🚀 Why Do we need to learn Sorting Algorithms?
     -Sorting is an incredibly common task, so it's good to know how it works
     -There are many different ways to sort things, and different techniques
     have their own pros, and cons

🚀 Implement bubble sort

🚀 Implement selection sort

🚀 Implement insertion sort

🚀 Understand why it is important to learn those
   simpler sorting algorithms

🚀 Bubble Sort: A Sorting Algorithm where the 
   largest values bubbles up to the top 

🚀 Bubble Sort:
   Time Comlexity:
      Worst Case: O(N**2)
      Average Case: O(N**2)
      Best Case: O(N) (with No Swaps featured)

🚀 Selection Sort unlike Bubble Sort.
   Selection Sort -< Placing Small Values into Sorted Position
   Bubble Sort -< Placing Larger Values into Sorted Position

🚀 Selection Sort is better than Bubble Sort although they're both 
   O(N**2) but the point in Selection Sort We make only one SWAP
   at the end of each for loop

🚀 Insertion Sort:
   -`Defintion`: Builds up the sort by gradually creating `a larger half` which is always `sorted`
   - Is totally good for sorting online algorithm as it keeps the first half sorted in live time

🚀 Elementary Sorting Algorithms 
   (Bubble Sort, Insertion Sort, and Selection Sort)
   also called Quadratic Sorting Algos

🚀 

Bubble Sort:
if Data is Sorted Bubble

🚀 Insertion Sort is good if you need your data continously sorted so new elements are being added

🚀 -Define `what` recursion `is` and `how` it can be `used`
   -Understand the two essential components of a recursive function
   -`Visualize` `the Call Stack `to better debug and understand recursive functions
   -Use `helper method recursion`, and `pure` `recursion` to solve more difficult problems

🚀 What is Recursion ?
   A Process (a function in our case) that calls itself with a failure condition


🚀 Recursion Tree

🚀 The only difference between Recursion, and loops are `Backtracking`

🚀 Types of Recursion:
      - Head / Top Recursion
      - Tail / Bottom Recursion
      - Tree Recursion

🚀 JSON.parse / JSON.stringify
   document.getElementById() and DOM Traversal Algorithms
   Object Traversal

   All of Those usages uses `RECURSION`

🚀 Functions don't get Invoked Randomly but In order, Therefore we need Stack
   Data Structure where each function is invoked it is placed on top of stack
   when we return something or end function we Popped the function from call stack

🚀 How Recursive Functions Work ?
    Invoke the `same` function with different input until you readch your base case

🚀 Base case is the condition when the recursion ends

🚀 Two Essential Parts of a recursive Func:
    - Base Case
    - Different Input

🚀 Where Things Go Wrong with Recursion Pitfalls:
    - `No Base Case`
    - `Forgetting to return or returning the wrong thing`
    - `Stackoverflow` === Maximum Call Stack size Exceeded

🚀 Helper Method Recursion Design Pattern

🚀 When you're making Pure Recursion Tips, 
   for arrays, use methods like `slice`, `the spread operator`, and `concat`
   that make copies of arrays so you `don't mutate them`

   for strings(immutable by default), use methods like `slice`, `substr`, and `substring`
   that make copies of strings

   for Objects, use methods like `Object.assign`, `spread operator`
   that make copies of Objects

🚀 Understand the limitations of sorting algorithms we've learned so far

🚀 Implement Merge Sort

🚀 Implement Quick Sort

🚀 Implement Radix Sort

🚀 Merge Sort is a combination of two things 
   ```Splitting Up -< Merging -< Sorting```
   

🚀 Merge Sort Time Complexity:
   O(log n) Decompositions
   O(n) Comparison per Decomposition


🚀 Data Structures are `collections of values`, 
   the `relationships` among them, and the functions or
    `operations` can be applied to the `data`

🚀 Different Data Structures `excel` at different things.
   Some are highly `specialized`, while others (like arrays)
   are `generally` used

🚀 `We're going to implement Data Structures as classes`

🚀 The method to create new objects must be called Constructor

🚀 Instance Methods vs Static Methods

🚀 LinkedList:
    - Data Structure Contains Head, Tail, and Length
    - Nodes, Each Node has a value, and a pointer
    - Accessing Node in Linkedlist like going up on stairs unlike arrays which like elevator you've random access to everything you wanna
    - LinkedList is a collection of Nodes
    - Pushing means adding a new node at the end of linkedlist  

🚀 Reconsolidation the difference between null, 0

🚀 LinkedList Implementation:
     - Pushing
     - Insert After
     - Append
     - Traversing The LinkedList
     - Popping:
         The problem here to remove the tail node we need to go through all nodes until the previous one and that's all because of it is not a doubly linkedlist as it has only one direction.
     - `Shifting`:
         `Remove` node from beginning
     - `Unshift`:
         `Adding` a new node to the beginning of linkedlist
     - Get:
         Retrieving a `node` by it's position in the linkedlist
     - Set
     - Insert
     - Remove
     - Reverse:
         Reverse LinkedList means Reverse Pointers       

🚀 DoublyLinkedList is similar to SinglyLinkedList but as an addition each node has a pointer
   to the previous node

🚀 Big O Notaiton of Doubly LinkedList :
    - Insertion : Constant Time Complexity O(1)
    - Removal: Constant Time Complexity O(1)
    - Searching: O(N)

🚀 Doubly Linked List:
    - Is almost Identical to Singly Linked List there is an additional pointer to previous nodes
    - Nearly In Searching for an element through an index we use Divide, and Conquer

🚀 ADT is a logical description and data structure is concrete

🚀 Abstract Data type (ADT) is a type (or class) for objects whose behaviour is defined by `a set of value and a set of operations.`

🚀 Stack:
    - Use Cases:
           Managing Fucntions Invocations
           Undo / Redo Functionality
           Routing (The History Object) is Treated as a Stack
    - Stack is a concept (LIFO) More than a code
    - There is more than way of Implementing the Stack
    - Operations:
        Push
        Pop
    - Implementation:
        - Using Arrary
        - Using LinkedList 
    - Time Complexity:
       Insertion : O(1)
       Removal : O(1)
       Searching : O(N)
       Access : O(N)
🚀 Queue:
    - It is a concept more than implementation
    - A FIFO Data Structure
    - Use Cases:
        Background Process
        Queue of Joining Players in a Game
        Uploading Resources (Can happen Concurently)
        Printing / Task Processing
    - Operations:
         Enqueue
         Dequeue
    - Implementation:
         - Using Array:
             Enqueue:(Pushing) O(1) 
             Dequeu:(Shifting) O(N)  
         - Using LinkedList:
             

🚀 Trees Data Structure:
    - What a Tree is ? :
       Tree is a non-linear data structure which organizes data in a hierarchical structure and this is a recursive definition.
        - Tree Terminologies:
       Root:
        The first node from where the tree originates is called as `a root node`.
        In any tree, there must be `only one root node.`
       Edge:
        `The connecting link` between any two nodes is called as `an edge`
         In a tree with n number of nodes, there are exactly `(n-1) number of edges.`
       Parent:
         The node which has a branch from it to any other node is called as `a parent node.`
         In other words, the node which has one or more children is called as a parent node.
         `In a tree, a parent node can have any number of child nodes.`
       Child:
         The node which is a `descendant` of some node is called as `a child node`.
         All the nodes except root node are child nodes
       Siblings:
         In other words, nodes with the same parent are `sibling nodes.`
       Degree:
         `Degree of a node` is `the total number of children` of that node.
         `Degree of a tree` is `the highest degree of a node among all the nodes` in the tree.
       Leaf:
         Every non-leaf node is an internal node.
       Leaf Node:
         The node which `does not have any child` is called as a leaf node.
       Level:
         In a tree, each step from `top to bottom is called as level of a tree.`
       Height:
         Total number of edges that lies on `the longest path from any leaf node to a particular node` is called as height of that node.
         `Height of all leaf nodes = 0`
       Depth:
         Total number of edges from root node to a particular node is called as depth of that node.
       Subtree:
         In a tree, each child from a node forms a subtree recursively.
       Forest:
         A forest is a set of disjoint trees.
    - Use cases of Trees:
        HTML DOM
        Network Routing
        Abstract Syntax Tree
        Artificial Intelligence
        Folders in Operating System
        Computer File Systems

    - Compare and contrast trees and lists ?
    - Differences between Trees, Binary Trees, Binary Search Trees ?
    - Implement Operations On Binary Search Operations
    - Binary Trees :
        Each Node can have at `most two children`
    - Binary Search Trees:
        Binary Trees + Sortable One

🚀 Tree Traversal:
    - Def: Visiting Each Node At Least One Time
    - Breadth First Search
    - Depth First Search:
       - InOrder 
       - PreOrder
       - PostOrder

🚀 When To Use Depth First Search, Breadth First Search?
   - It depends really on a width of the tree -> Space Complexity
   - 

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

🚀
      