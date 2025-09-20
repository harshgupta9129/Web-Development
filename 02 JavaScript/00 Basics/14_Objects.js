const course = {
    coursename : "Java Script",
    price : 999,
    coursesource : "Youtube"
}

// course.coursename;

const {coursename} = course;

console.log(coursename);  // Output : Java Script

const {coursename : name} = course;
console.log(name) // Output : Java Script



