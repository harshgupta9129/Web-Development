const name = "Rockstar";
const repocount = 10;

// console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Mini Militia')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,4);
const newString = gameName.slice(0,10);
// console.log(newString);

const newStringOne = "       Rockstar     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rockstar.com/rockstar%20index.html";
console.log(url.replace('%20','-'));

console.log(url.includes('rockstar'));

const string1 = "My Name is Rockstar";
console.log(string1.split(' '));

