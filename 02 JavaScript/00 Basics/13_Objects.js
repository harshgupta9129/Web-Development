// const tinderuser = new Object ()
const tinderuser = {};
tinderuser.id = 12345
tinderuser.name = "Rockstar"
tinderuser.isLoggedin =  false;

// console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        firstname : "Some",
        lastname : "Boy"
    }
}

// console.log(regularuser.fullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e"
}

// const obj3 = {...obj1, ...obj2}; //This is also for merge
// Object.assign(obj1, obj2); // This will merge the object in 1st object 
// console.log(obj1);  

const obj3 = Object.assign({},obj1, obj2);
console.log(obj3);

console.log(Object.keys(tinderuser)); //It will reture the whole keys in array formate
console.log(Object.values(tinderuser)); //It will reture the whole values in array formate

console.log(tinderuser.hasOwnProperty('isLoggedin'));  

