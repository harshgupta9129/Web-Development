// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[3])  // Indexing
// console.log(myArr2)  // Indexing

// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // Add At starting of Array
// myArr.shift() //Delete From Starting of Array

// console.log(myArr)

// console.log(myArr.includes(9)) 

// const newArr = myArr.join()
// console.log(newArr)


//IMP
const arr = [1,2,3,4,5,6]

console.log("A", arr)

const myn1 = arr.slice(1,3)
console.log("B" , arr)
console.log(myn1)

const myn2 = arr.splice(1,3)
console.log("C" , arr)
console.log(myn2)

// Slice does not manupulate the Array But Splice Manupulate the Array
