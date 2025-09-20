// ******************* Num *****************

const score = 100;
// console.log(score);  // Gives 100

const balance = new Number(100);
// console.log(balance); // Gives [Number : 100]

// console.log(balance.toFixed(2));

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))

// console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// ******************** Maths ********************
// console.log(Math);

// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5 
// console.log(Math.floor(4.9)); //4 Only Gives rightside of . 
// console.log(Math.max(1,2,9,3,4,0))

// console.log(Math.floor((Math.random()*10)%6)+1) // Gives 1 to 6

const min = 5;
const max = 9;
console.log(Math.floor(Math.random()*(max-min+1) + min))  //[5,9]
