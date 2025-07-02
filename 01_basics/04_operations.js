let value = 2
let negValue = -value

console.log(value); //2
console.log(negValue); //-2

console.log(2+3); //5
console.log(2-3); //-1
console.log(2*3); //6
console.log(2**3); //8
console.log(2/3); //0.66666666
console.log(2%3); //2

let str1 = "hello"
let str2 = " world"

let str3 = str1+str2
console.log(str3); //hello world --> concatenation

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(true); //true
console.log(+true); //1
//console.log(true+); //error
console.log(+""); //0

let counter = 100
counter++; //postfix (operator after operand)
console.log(counter); //101

let count = 100
++count; //prefix (operator before operand)
console.log(count); //101