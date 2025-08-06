// Immediately Invoked Function Expression


// This is use for prevent from global scope pollution 
// DIrectly Execution of Function

(function chai() {
    console.log(`DB CONNECTED`);
})();
// ; must apply


( (name) => {
    console.log(`DB CONNECTED ${name}`)
} )('harsh')
