// Higher order Array loops -- array specific loops

// ForOf
const arr = [1,2,3,4,5]

for (const i of arr) {  // for any iterable , this can be done
    console.log(i)
}

// Maps
const map = new Map() // dont take duplicate keys 
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)
map.set('a',3)
console.log(map)

for (const [key,value] of map)
{
    console.log(key , value)
}

// Objects are not iterable by default 

const myobj = {
    js:"js",
    cpp:"C++",
    py:"python"
}
//For in
for (const key in myobj) { // can be used in any non primary -- aaray , obj etc  || takes keys , in case of array - keys are indexes
    if (Object.prototype.hasOwnProperty.call(myobj, key)) { // optional , recommended
        const value = myobj[key];
        console.log(key , value)
    }
}
// maps are not iterable so cannot be taken in forin loops :( , only for or forof

// ForEach

arr.forEach(i => { // callback functions dont have name and {parameters} , as the only param here can be (value , index , arr) in iterable , can also be function(){} , so any one can be used 
    console.log(i)
});
// other than callback , any other function can also be passed , just pass its reference , dont call it there