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


//what if we dont know how many values in the argument? --> use ...(rest or spread operator)
function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(200,400,500))
// suppose u use parameter (a , b , ...num) , it takes all in array except first and second that goes to a and b resp.

const user = {
    username: " swayam",
    price: 199
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} , and Price is ${anyObj.price}`)
}

handleObject(user)
handleObject({username:"sam" , price:399})

const arr = [200,400,100,600]

function returnsecarr(getarr){
    return getarr[1]
}

console.log(returnsecarr(arr))
console.log(returnsecarr([100,1000,10000,100000]))