const marvel_heroes = ["thor", "Ironman", 'Spiderman'];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heros);  // it not merge only push whole array
// console.log(marvel_heroes);

const new_heroes = marvel_heroes.concat(dc_heros); // it will merge
// console.log(new_heroes);

const all_new_array = [...dc_heros, ...marvel_heroes];
// console.log(all_new_array);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Rockstar"));
console.log(Array.from("Rockstar"));
console.log(Array.from({name: "Rockstar"}))  // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

