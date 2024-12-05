// to refer current context , we use this keyword

const user = {
    username: "swayam",
    price: 999,

    welcomeMessage: function(){
        console.log(`hello ${this.username}`)
        console.log(this)
    }
}

user.welcomeMessage()
username = "sam"
user.welcomeMessage()

console.log(this) // in browser console , context is the window
// this refers to currect context , maybe object , class or something else

function chai(){
    console.log(this)
}
// chai() a lot of values
const chai2 = function()
{
    console.log(this)
}
// but in function this.variable does not work


// -------------Arrow Function-----------------------------------

const chai3 = ()=> {
    console.log(this)
    let username = "swayam"
} // returns {}

const addtwostar = (num1 , num2) => num1+num2 // implicit return statement for one liners (like lambda function)
// if () present or nothing like above present no need to return
console.log(addtwostar(3 ,5))

const addtwo = (num1 , num2) =>{
    return num1+num2
} // if {} present have to return , explicitely return
console.log(addtwo(4,5))

const objreturn = () => ({username:"swayam"})
console.log(objreturn())

