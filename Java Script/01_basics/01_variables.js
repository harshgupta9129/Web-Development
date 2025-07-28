const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "har@gmail.com"
accountPassword = "112233"
accountCity = "Bengaluru"

// console.log(accountId)
/* 
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])