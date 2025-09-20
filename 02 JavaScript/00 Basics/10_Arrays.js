// Arrays

const arr = [1, 2, 3, 4];
const new_arr = new Array (1, 2, 3, 54)

// console.log(new_arr);

// Array Methods

arr.push(5);
console.log(arr);

// arr.pop(); // For delete last element
// console.log(arr);

arr.unshift(9);  // Add in starting
// console.log(arr); 

console.log(arr.includes(0));
console.log(arr.indexOf(0));

// slice , splice

console.log("A", arr)

const myn1 = arr.slice(1,3);  // index of 1 to 3-1

const myn2 = arr.splice(1,3);  // index of 1 to 3 and original array manupulate and remove splice part 1 to 3
console.log(myn1);
console.log(myn2);