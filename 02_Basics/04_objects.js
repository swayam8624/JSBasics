// Object Constructor --> Object.create()

const tinderUser = new Object() //singleton
// const tinderUser2 = {} // non singleton
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false

console.log(tinderUser)

const regUser = {
    email : "sam@gmail.com",
    full_name :{
        userfull:{
            first:"swayam",
            last :"singal"
        },
        formal:"sam sam"
    }
}
console.log(regUser.full_name?.userfull.first) // ? allows the if else case that if value found then proceed (ternary)

const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {obj1 , obj2}
console.log(obj3)

const obj4 = Object.assign({} , obj1 , obj2) //merges the object , {} optional for guarantee of merged object return (target , source1,source2,..)
// the target , in this case {} is actually returned as obj4
console.log(obj4)

const obj5 = {...obj1 , ...obj2} //spread and return
console.log(obj5)
// database generally gives array of objects 

console.log(Object.keys(tinderUser) , typeof Object.keys(tinderUser) ) // array
console.log(Object.values(tinderUser) , typeof Object.values(tinderUser) ) //array
console.log(Object.entries(tinderUser) , typeof Object.entries(tinderUser) ) // array of arrays
console.log(tinderUser.hasOwnProperty('isLoggedin'));

// Js is case sensitive
// to check if iterable or not , use propertyIsEnumerable()