const accountId = 144553
let accountEmail = "swayam.singal@yahoo.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed
accountEmail = "hahha@gmail.com"
accountPass = "323232"
accountCity = "Kolkata"

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountEmail , accountPass , accountId , accountCity , accountState])
