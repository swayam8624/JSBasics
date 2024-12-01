// Singleton - one of its kind (only in case of constructors)

// Object Literals

const mySym = Symbol("key1")
const JsUser = {
    name:"swayam",  // keys are by default strings , value can be anything
    age:20,
    course: "Btech",
    isLoggedin : false,
    LastLogin:["Sunday ", "monday"],
    "full_name" : "Swayam Singal", // can be only accessed using []
    mySym : "mkey1", // its not complaining , but shouldn't be done like that as it wouldn't be used as Symbol but as String
    [mySym] :"mykey2" // [] used to use symbol as symbol
}
console.log(JsUser.course)
console.log(JsUser["name"]) // as keys are string or number , hence the prior syntax
console.log(JsUser.mySym) // gives value of symbol used as string 
console.log(JsUser[mySym]) // gives correct value of symbol used as symbol

JsUser.age = 21
// Object.freeze(JsUser) // stops someone from updating the values inside JsUser object , wont throw error but just wont work
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())
JsUser.greeting()
console.log(JsUser.greeting)

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
JsUser.greeting2()
console.log(JsUser.greeting2)
