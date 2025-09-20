// Immediately Invoked Function Expression (IIFE)


// It run function immediately
// Also Remove the global pollution

(function chai () {
    console.log(`DB Connected`);
})();  // ; it must applu

(() => {
    console.log(`DB CONNECTED`)
}) ();

((name) => {
    console.log(`DB CONNECTED ${name}`)
}) ("Rockstar");



