// singleton

const mySym = Symbol("key1")

const JsUser = {
    name : "Harsh",
    age : 18,
    [mySym] : "Key1', 
    location : "Jaipur",
    email : "harsh@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(typeof JsUser[mySym])

JsUser.email = "harsh@chatgpt.com"
// console.log(JsUser)

// Object.freeze(JsUser)
JsUser.email = "harsh@amazon.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greetingTwo());