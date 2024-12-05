var c = 300

if(true) {
    let a = 10
    const b = 20 
    var c = 30 // var changes to 30 which shouldnt have , as this c should be confined to this if itself
} // curly braces define scope


console.log(c); // this will give error as a and b are available only to that scope of if , but only var comes out

let a = 300 

if(true){
    let a = 20 // both these a are independent , one is global and this is local(block)
    console.log(a)
    a = 30 // still independent as an a is defined in this scope which is the one being changed
}
console.log(a)
if(true){
    a = 20 // not independent, this changes outer one
}
console.log(a)
// node scope and browser code scope are different


// local can access global but not vice versa
function one(){
    const username = "swayam"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    // // Error -->     console.log(website)
    // //              ReferenceError: website is not defined
    two()
}
one()

if(true)
{
    const username = "Swayam"
    if(username == "Swayam"){
        const website = " Youtube"
        console.log(username+website)
    }
    // console.log(website) same error as above
    console.log(username)
}

// console.log(username) also gives error as global access to local variable 

// ---------------------------Interesting----------------------------------------------------

addone(5) // also would get executed as func definition is present
function addone(n)
{
    return n+1
}
addone(5) // executes properly

// addTow(5) // wont get executed as variable function hoisting is after it
const addTow = function(n){
    return n+2
}

addTow(5) // executes properly