//          Array

const myArr = [0,1,2,3,4,5]
// duplicates allowed
// resizable , contains mix of datatypes
// cannot be accessed using arbiitrary strings
console.log(myArr[0] , myArr[1])
// array copy operations create shallow copies (copy who share the same ref point unlike deep copy in primitive datatypes)

const myheros = ["Shaktiman" , "Naagraj"]
const myArr2 = new Array(1,2,3,4)
// also have prototype access

//         Array Methods

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9) // at the beginning
console.log(myArr)
myArr.shift()
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(19) , myArr.indexOf(3)) // -1 is not present
const newarr = myArr.join()
console.log(newarr , typeof(newarr));
// slice , splice

console.log("A " , myArr)

const myn1 = myArr.slice(1,3) //creates a deep copy and does not change the actual array
console.log("sliced " ,  myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1,3) //creates a deep copy and does not change the actual array
console.log("spliced " , myn2)
console.log("C ", myArr) //creates a shallow copy and changed the original array by removing the spliced portion

