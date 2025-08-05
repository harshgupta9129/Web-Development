function sayMyName () {
    console.log("R");
    console.log("O");
    console.log("C");
    console.log("K");
    console.log("S");
    console.log("T");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2) {
    return number1+number2
}

// console.log(addTwoNumbers(10,20))


// If Nothing is passed in function then we can use for default
// function loginUserMessage (username = "Sam")
function loginUserMessage (username) {
    if (username === undefined)  {
        console.log("Please Enter A Username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rockstar"))
// console.log(loginUserMessage())

function calculateCartPrice (...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,5000));

const user = {
    username : "rockstar",
    price : 199
}

function handleObject (anyobject) {
    return `Username is ${anyobject.username} and price is ${anyobject.price}`
}

// console.log(handleObject(user));

const myNewArray = [200, 400, 100, 600] 

function returnSecondValue(anyArray) {
    if (anyArray[1]) return anyArray[1]
    return "Please Enter A Valid Array which having atleast two element" 
} 

console.log(returnSecondValue(myNewArray))


