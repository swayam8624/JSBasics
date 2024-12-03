function sayMyName(){
    console.log("Swayam")
    console.log("Singal")
}
sayMyName()

function addTwo(number1 , number2){ // parameters are called while defining the function
        console.log(number1+number2)
}

addTwo("5" , "4") // arguments are passed
addTwo(5,4)
addTwo(3 , "a")
addTwo(3 , null)

const result = addTwo(3 , 5)
console.log(result)

function addTwostar(number1 , number2){
     let res = number1+number2
     return res // or direct return num1+num2
     // nothing happens after return

}

addTwostar(3,5)
sarres = addTwostar(3,5)
console.log(sarres)

function loginUserMessage(username){
    return `${username} just logged in`
}
// if no argument passed , it gives undefined as the argument
returnedvalue = loginUserMessage()
console.log(returnedvalue)
console.log(loginUserMessage("Swayam"))

function loginwithif(username)
{
    if(username==undefined) // or if(!username)
        console.log("Please enter a username")
        return 
    return `${username} just logged in`
}
returnedvalue = loginwithif()
console.log(loginwithif("Swayam"))

function loginwithifdefault(username = "Sam")
{
    return `${username} just logged in`
}
console.log(loginwithifdefault())
console.log(loginwithifdefault("Swayam"))