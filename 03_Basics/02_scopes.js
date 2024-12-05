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