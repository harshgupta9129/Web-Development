// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, Bigint

// const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;

const id = Symbol('123');
const anotherid = Symbol('123');
// console.log(id===anotherid);

const BigNumber = 4845618945184n;  // n is used for bigint
// console.log(typeof BigNumber); // give bigint


// Refrence (Non Primitive)

// Array, Objects, Functions
const heros = ["Skatiman", "naagraj", "doga"];

let obj = {
    name : "Rockstar",
    age : 18
}
// console.log(obj);

const myfunction = function () {
    console.log("Hello Rockstar");
}

// console.log(myfunction());




