const name = "Rockstar"
const repoCount = 50

// console.log (name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String('Rockstar')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-5,5)
// console.log(anotherString);

const newStringOne = "       rockstar       "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rockstar.com/rockstar%20rockstar"

// console.log(url.replace('%20','-'))

console.log(url.includes('star'))

const string1 = 'Hello-my-world'
console.log(string1.split('-')) 

