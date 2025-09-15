// let a = 100
// const b = 30
// var c = 300

if (true) {
    let a  = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ",a);
}

// console.log(a); // Now Work on local scope
// console.log(b); // Now Work on local scope
// console.log(c);  // It will output 30

function one() {
    const username = "Rockstar"
    function two() {
        const website = "Youtube"
        console.log(username)
    }

    // console.log(website)
    two()
}
// one()

/*
if (true) {
    const username = "Rockstar"
    if (username === "Rockstar") {
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
} */

console.log(addone(5)); // This will output 6

function addone(num) {
    return ++num;
}

// console.log(addtwo(10)); // This will give error

const addtwo = function (num) {
    return num+2;
}

console.log(addtwo(10)); // This will output 12

