// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "harsh",
            lastname : "gupta" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// Object keys return the array of keys in objects
// console.log(Object.keys(tinderUser)) 
// console.log(Object.values(tinderUser)) 

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor : "hitesh"
}

const {courseInstructor} = course
// console.log(courseInstructor);



