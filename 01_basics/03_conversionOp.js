//TO NUMBER CONVERSION

let score1 = 33
let score2 = "33"
let score3="33abc" //will be treated same as score2 as its a string again
let score4 = null
let score5 = undefined
let score6 = true 
let score7 = false

console.log(typeof score1); //number
console.log(typeof(score1)); //number

console.log(typeof score2); //string
console.log(typeof(score2)); //string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber); //number

console.log(typeof score3); //string
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //number
//why its still coming as number? Its toh "33abc"
console.log(valueInNumber3); //NaN

console.log(typeof score4); //OBJECT
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); // 0(zero) 

console.log(typeof score5); //undefined
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //NaN

console.log(typeof score6); //boolean
let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6); //number
console.log(valueInNumber6); //1

console.log(typeof score7); //boolean
let valueInNumber7 = Number(score7)
console.log(typeof valueInNumber7); //number
console.log(valueInNumber7); //0


//TO BOOLEAN CONVERSION

let isLoggedIn = 1
let isLoggedOut = 0
let isLogged = ""

console.log(typeof isLoggedIn); //number
let valueInBoolean = Boolean(isLoggedIn)
console.log(typeof valueInBoolean); //boolean
console.log(valueInBoolean); //true

console.log(typeof isLoggedOut); //number
let valueOutBoolean = Boolean(isLoggedOut)
console.log(typeof valueOutBoolean); //boolean
console.log(valueOutBoolean); //false

console.log(typeof isLogged); //string
let valueBoolean = Boolean(isLogged)
console.log(typeof valueBoolean); //boolean
console.log(valueBoolean); //FALSE


//TO STRING CONVERSION

let someNumber = 33

console.log(typeof someNumber); //number
let stringNumber = String(someNumber)
console.log(typeof stringNumber); //string
console.log(stringNumber); //33
