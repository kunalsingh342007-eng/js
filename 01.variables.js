const accountId = 144553
let accountEmail="kunalsingh@gmail.com"
var accountPassword="kunal123"
var accountCity="Jaipur"
let accountState;

// accountId=2//not allowed because accountId is a constant
console.log(accountId)
accountEmail="kunalsingh567@gmail.com"
accountPassword="kunal65"
accountCity="Delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
not to use var because it is function scoped and can be redeclared and updated
*/
console.log(accountId);