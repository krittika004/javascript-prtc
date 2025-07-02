const accountId = 123456789
let accountEmail = "krittika@google.com" // let overcomes block/functional scope problem
var accountPassword = "17"
accountCity = "Howrah"
let accountState;

// accountId = 2 //not allowed as its assigned constant
accountEmail = "kd@g.com"
accountPassword = "987"
accountCity = "Pune"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])