// var c = 300
// If Var is declared in scope in it also access in out of scope
// let can also access in scope only if they are declared in scope or out of scrope
let a = 300

if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log(a)
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    console.log(website)

    two()
     
}

// one()

if (true) {
    const username = "rockstar"
    if (username === "rockstar") {
        const website = "youtube"
        console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)

// ++++++++++++++++++++++ interesting +++++++++++++++ //


// This is Acceptable
console.log(addone(5))

function addone (num) {
    return num + 1
}

// console.log(addTwo(5)) //this is not acceptable

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5))