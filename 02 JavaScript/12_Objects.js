// singleton
// Object.create

// object literals

const mysym = Symbol("Key1")
 
const Jsuser = {
    name : "Rockstar",
    age : 18,
    location : "Jaipur",
    [mysym]: "mykey1",
    email: "rockstar@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(Jsuser.age);
// console.log(Jsuser["lastLoginDays"]);
// console.log(Jsuser[mysym]);

// Object.freeze(Jsuser);
Jsuser.email = "rockstar@google.com"
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello JS User");
}

console.log(Jsuser.greeting());


Jsuser.greeting2 = function () {
    console.log(`Hello JS User,${Jsuser.name}`);
}

console.log(Jsuser.greeting2())


