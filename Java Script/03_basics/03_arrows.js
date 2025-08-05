const user = {
    username : "rockstar",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }    
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)
// This will give empty object

function chai () {
    let username = "rockstar"

    // console.log(this.username); 
    // This is only work in objects not in function

    console.log(this)
}

// chai()

const chai1 = function () {
    let username = "rockstar"

    // console.log(this.username); 
    // This is only work in objects not in function
}


// Basic Way TO Declared Arrow Function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Another Way
// const addTwo = (num1, num2) => num1 + num2

// Another Way
const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4,5))

const objectreturn = () => ({username : "Rockstar"})
console.log(objectreturn())