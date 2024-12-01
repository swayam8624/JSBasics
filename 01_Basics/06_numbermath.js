const score = 50

const balance = new Number(230.2653) // object initialization
console.log(balance , typeof(balance) ,score ,  typeof(score));
// less methods compared to string

console.log(balance.toString() , balance.toString().length)
console.log(balance.toFixed(2)) // rounds off to get desired presision value

const other = 23.8966
const other1 = 123.8966
const other2 = 1123.8966
console.log(other.toPrecision(3) , other1.toPrecision(3) , other2.toPrecision(3))

const hun = 1000000
console.log(hun.toLocaleString()); //US standard string is default
console.log(hun.toLocaleString('en-IN')); 
console.log(Number.MAX_VALUE , Number.MIN_VALUE);


// ---------------------------------------------------------------------------------------


//                                   MATHS

// comes by default in js

console.log(Math) //similar to string , in browser , it gives several functions
console.log(Math.abs(-4))
console.log(Math.round(23.5));
console.log(Math.ceil(23.2) , Math.floor(23.9));
console.log(Math.min(4,5,2,7))
console.log(Math.max(2,6,1,8))

console.log(Math.random()) // 0-1
// seeding not possible here
console.log(Math.floor(Math.random()*10) +1); // for 1-10

const min = 10
const max = 20 

console.log(Math.floor((Math.random() * (max-min+1)) + min)) // important syntax to get value between a range