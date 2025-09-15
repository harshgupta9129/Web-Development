function sayMyName() {
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

function addTwoNumbers (number1, number2) {
    return number1+number2;
}

// addTwoNumbers(3,7) //10
// addTwoNumbers(3,"7") //37

const ans = addTwoNumbers(3,7);
// console.log(ans);

function loginUserMessage(username = "Harsh") {
    if (username === undefined) {
        console.log("Please Enter Your Username")
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Rockstar"))  // Rockstar just logged in
// console.log(loginUserMessage())  // Harsh just logged in

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200,400,500)); // [ 200, 400, 500 ]

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject({username : "Rockstar", price : 300})

const myNewArray = [200, 300, 100, 600]

function returnSecondVAlue(getArray) {
    return getArray[1];
}

console.log(returnSecondVAlue(myNewArray));

