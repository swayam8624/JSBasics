// either '' or "" 
// concat using +

let str1 = 'hello '
let str2 = "world"
console.log(str1+str2);
let repo = 30
console.log(str1+str2+", i have "+ repo + " repos");
//but above is old
// use instead ``
console.log(`Hello ${str2} and my repo count is ${repo}`);

const gameName = new String("swayam-gc") // for string object , another way of initalization 
// in the above case, index and char are at a key-value pair . 
console.log(gameName[0]);
console.log(gameName.__proto__); //its not actually empty , to see look in browser console

console.log(gameName.length);
console.log(gameName.toUpperCase()); //doesnot change original value 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'))
const newstr  = gameName.substring(0 , 4)// if neg value given , it ignores and starts from 0
console.log(newstr);
console.log(gameName.split('-'))

const anstr = gameName.slice(-8,4) // can give neg values as well , it starts from reverse
console.log(anstr);

const str3 = "     gsgsg      "
console.log(str3 , str3.trim())

const url = "http://swayam.com/swayam%20singal"
console.log(url.replace('%20' , "-"));
console.log(url.includes('swayam'))

// String {'swayam'}
// 0 : "s"
// 1 : "w"
// 2 :  "a"
// 3 :  "y"
// 4 :  "a"
// 5 :  "m"
// length :  6
// [[Prototype]] :  String
// anchor :  ƒ anchor()
// at :  ƒ at()
// big :  ƒ big()
// blink :  ƒ blink()
// bold :  ƒ bold()
// charAt :  ƒ charAt()
// charCodeAt :  ƒ charCodeAt()
// codePointAt :  ƒ codePointAt()
// concat :  ƒ concat()
// constructor :  ƒ String()
// endsWith :  ƒ endsWith()
// fixed :  ƒ fixed()
// fontcolor :  ƒ fontcolor()
// fontsize :  ƒ fontsize()
// includes :  ƒ includes()
// indexOf :  ƒ indexOf()
// isWellFormed :  ƒ isWellFormed()
// italics :  ƒ italics()
// lastIndexOf :  ƒ lastIndexOf()
// length :  0
// link :  ƒ link()
// localeCompare :  ƒ localeCompare()
// match :  ƒ match()
// matchAll :  ƒ matchAll()
// normalize :  ƒ normalize()
// padEnd :  ƒ padEnd()
// padStart :  ƒ padStart()
// repeat :  ƒ repeat()
// replace :  ƒ replace()
// replaceAll :  ƒ replaceAll()
// search :  ƒ search()
// ƒ slice()
// ƒ small()
// ƒ split()
// ƒ startsWith()
// ƒ strike()
// ƒ sub()
// ƒ substr()
// ƒ substring()
// ƒ sup()
// ƒ toLocaleLowerCase()
// ƒ toLocaleUpperCase()
// ƒ toLowerCase()
// ƒ toString()
// ƒ toUpperCase()
// ƒ toWellFormed()
// ƒ trim()
// ƒ trimEnd()
// ƒ trimStart()
// ƒ trimEnd()
// ƒ trimStart()
// ƒ valueOf()
// ƒ [Symbol.iterator]()
// [[Prototype]] :  Object
// constructor :  ƒ Object()
// ƒ hasOwnProperty()
// ƒ isPrototypeOf()
// ƒ propertyIsEnumerable()
// ƒ toLocaleString()
// ƒ toString()
// ƒ valueOf()
// ƒ __defineGetter__()
// ƒ __defineSetter__()
// ƒ __lookupGetter__()
// ƒ __lookupSetter__()
// __proto__
// ƒ __proto__() - get and set
// [[PrimitiveValue]] :  ""
// [[PrimitiveValue]] :  "swayam"