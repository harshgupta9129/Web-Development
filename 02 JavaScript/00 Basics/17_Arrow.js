const user = {
    username : "Rockstar",
    prie : 999,
    welcomeMessage : function () {
        // this.username important
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam" 
// user.welcomeMessage()

// console.log(this)  // This give empty object

// function chai () {
//     console.log(this)
// }

// chai() // This is lots of information

// const chai = () => {
//     let username = "Rockstar"
//     console.log(this.username)
// }

// chai () // give undefined

// Arrow Function 1st Way

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// 2nd Way 

const addtwo = (num1, num2) => (num1 + num2)
console.log(addtwo(3,5))