//      Conversions

let score = "33abc"

console.log(typeof score)

console.log(typeof(score));

let valueInNumber = Number(score) // becomes NaN if the string not actually an number like 33 but is 33abc

console.log(typeof(valueInNumber));
console.log(valueInNumber);

let x = Number(null)
console.log(x);
// boolean true is 1 , false/null is 0 , all strings give NaN ex-> '33abs'= NaN
// number is easily converted into a number ex -> '33' = 33
// to convert -> Number , String , Boolean etc .. (type with first letter Capital)
// true -> any value other than 0 , empty string  , false -> 0 , empty string 

let isloggedin = -3
let booleanvalue = Boolean(isloggedin)

console.log(booleanvalue);
console.log(typeof booleanvalue);

//      Operations

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2 , 2-2 , 2*2 , 2**2 , 2/2 , 2%3);

let str1 = "hello "
let str2 = "swayam"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2 , 1+"2" , "1"+"2" , "1"+2+2 , 2+2+"1" , 1+true , 2+false , "2"+true , true+true+"2" , 1+"")

let num1 , num2 , num3 

num1 = num2 = num3 = 2+2

let gameCounter =100
gameCounter++
console.log(gameCounter++)
console.log(++gameCounter);
