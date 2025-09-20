// JavaScript Execution Context

// Global Execution Context
// Function Execution Context
// Eval Execution Context

// Step
// {} -> Memory Creation Phase
//    -> Execution Phase

// How Code Execution
let val1 = 10
let val2 = 5

function addnum (num1, num2) {
    let total = num1 + num2
    return total;
}

let result1 = addnum(val1,val2)
let result2 = addnum(10,2)

// 1. Global Execution -> this
// 2. Memory Phase 
//     val1, val2 = undefined
//     addnum -> defination
//     result1, result2 = undefined
// 3. Execution Phase
//     val1 = 10 val2 = 5
//     addnum -> New Variable Environment + Execution Thread
//               Memory Phase and Execution Phase
//               then delete
//     addnum -> New Variable Environment + Execution Thread
//               Memory Phase and Execution Phase
//               then delete