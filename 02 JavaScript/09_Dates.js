// Dates

let myDate = new Date ()
console.log(myDate.toString());  // Sat Sep 13 2025 23:01:57 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // Sat Sep 13 2025
console.log(myDate.toLocaleString());  // 13/9/2025, 11:02:54 pm
console.log(typeof myDate)

let myCreatedDate = new Date (2006,2,22); // YYYY,MM(0),DD 
myCreatedDate = new Date("03-22-2006")  //MM-DD-YYYY
console.log(myCreatedDate.toDateString()) // Wed Mar 22 2006

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let daynow = new Date();
console.log(daynow.toLocaleString('default',{
    weekday: 'long'
}))

