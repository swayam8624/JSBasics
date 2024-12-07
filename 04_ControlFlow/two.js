// Switch
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month = 9

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Fubuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    default:
        console.log("You are not worthy enough");
        break;
}

// break used in several places -> if , switch , for , while etc , breaks the control flow

// falsy values -> false , 0 , -1 , BigInt 0n , null , "" , undefined , NaN
// truthy -> "0" , 'false' , " " , [] , {} , function(){} , everything not a falsy 

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = null??undefined??34??10 // if first value is null/undefined/NaN , them assign second value. used in DB mostly
//multiple ?? possible like logical operators
console.log(val1)

// Ternary operator
// condition ? true : false
const coffee = 100
coffee==100? console.log("too much") : console.log("2 please");