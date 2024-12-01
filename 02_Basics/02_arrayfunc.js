const marvel = ["Thor" , "Ironman" , "Spiderman"]
const dc = ["Superman" , "Flash" , "Batman"]

marvel.push(dc)
console.log(marvel) // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
console.log(marvel[3][1])
marvel.pop()
const nyarr = marvel.concat(dc) // returns a new array with both array merged
console.log(nyarr) 

const allher = [...marvel , ...dc]
console.log(allher)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another.flat(Infinity) // returns all in one 1D array , parameter is the depth till which we need to go , should give actual depth rather than infinity
console.log(real_another)

console.log(Array.isArray("Swayam"))
console.log(Array.from("Swayam"))
console.log(Array.from({name:"swayam"})) // returns empty until mentioned whether key array is needed or value array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3)) //returns a new array from input of multiple elements