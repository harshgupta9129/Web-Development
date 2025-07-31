// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 798756484765487567598484n

const heros =["Shaktiman", "naagraj", "doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}

// const myFunction = function() {
//     console.log("Hello World")
// }

// Refernce (Non primitive)

// Array, Objects, Function

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "harshgupta9129"

let anothername = myYoutubename
// console.log(anothername);


anothername = "Harshgupta_9129"
// console.log(anothername)

let user = {
    email : "user@google.com",
    upi : "user@ybl"
}

let user1 = user
user1.email = "userone@google.com"
console.log(user1)

console.log(user)