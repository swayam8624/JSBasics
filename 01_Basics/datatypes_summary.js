//      Primitive 
/*
String
Number - includes both int and float
Boolean
null
undefined
Symbol - used to make a value "unique"
BigInt
*/

id = Symbol("123")
// JS is a dynamically typed language (unlike TypeScript)
anid = Symbol("123")
console.log(anid==id);
const bigNum = 23435253121123123123n  // for BigInt


//      Non-Primitive or Reference
/*
Arrays 
Objects
Functions
*/

const heros = ["shaktiman" , "nagraj" , "doga"] //return object datatype
let myobj = {       // return object datatype
    name : "Swayam",
    age : 22
}
// in value , datatype can be anything
// functions an also be treated like a variable
const myfunc = function(){ // return function object datatype
    console.log("Hello World")
}

// ---------------------------------------------------------------------------------------
console.log(typeof myfunc , typeof myobj)

// Type of Val                                        Result

// undefined                                          undefined
// Null                                               object
// boolean                                            boolean
// number                                             number
// String                                             string
/*
object(native and does not implement[[Call]])         object
object(native or host and does implement[[Call]])     function object
object(host and does not implement[[Call]])           Implementation defined except may not be "undefined" , "boolean" , "number" , "string"
*/



// ---------------------------------------------------------------------------------------

//                              Memory Allocation
/*
Stack -> Primitive Datatypes -- We get a copy of it 
Heap -> Reference Datatypes -- We get a reference of the original value
*/

let a = "swa"
let b = a // we get a copy of it b , not reference
console.log(b)
b = "wea"
console.log(a , b) //a does not get changed as b was just a copy and not reference

let user = {
    email : "user@gmail.com" , 
    pass : "hahaha"
}
let user2 = user 
console.log(user , user2)
user2.pass = "byebyebye"
console.log(user , user2) // both gets updated as non primitive in heap gives a reference of original value rather than a copy
// now , the concept to understand is that user and user2 are in stack only as variable 
// but the content inside it being an object resides in heap

