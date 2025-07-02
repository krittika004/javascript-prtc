console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); //false
console.log(2<=1); //false
console.log(2==1); //false
console.log(2!=1); //true

console.log("2">1); //true
console.log("02">1); //true
//Typescript doesnot allow to compare 2 diff datatypes, but here it allows

console.log(null>0); //false
console.log(null>=0); //true
console.log(null<0); //false
console.log(null<=0); //true
console.log(null==0); //false
console.log(null!=0); //true
//An equality chech == and comparisons ><>=<= works differently
//Comparisons convert null to a number. treating it as 0
//That's why (2)null>=0 --> true and (1)null>0 --> false

console.log(undefined>0); //false
console.log(undefined>=0); //false
console.log(undefined<0); //false
console.log(undefined<=0); //false
console.log(undefined==0); //false
console.log(undefined!=0); //true

//=== --> indicates strict checking of datatype

console.log("2"===2); //false
