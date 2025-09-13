const accountId = 144567;
let accountEmail = "rockstar@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";  // Don't use it
let accountState;

// accountId = 2; const variable is not change

accountEmail = "rockstar@google.com";
accountPassword = "212112";
// console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);