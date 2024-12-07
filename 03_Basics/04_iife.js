// Immediately Invoked Function Expression

(function chai() // named IIFE
{
    console.log("DB Connected")
})();
// semicolon necessary to end the code here
// as seen in arrows , keeping function is block () , it can be immediately invoked
// to the global scope from being polluted

( (name) =>{ // Simple IIFE / Unnamed
console.log(`DB Connected 2 ${name}`)
})("Swayam")

