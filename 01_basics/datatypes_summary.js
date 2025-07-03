//Primitive Datatype are of 7 types
//Number, String, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId); //false
console.log(typeof id); //symbol
console.log(typeof anotherId); //symbol

const BigNumber = 243665956341541365n
console.log(typeof BigNumber); //bigint
console.log(typeof bigNumber); //undefined

//Reference (Non Primitive) Datatypes
//Array, objects, functions

const heros = ["batman", "spiderman"]; //array
console.log(typeof heros); //object

 //objects 
let myObj={
    name: "kritti",
    age: 21,
}  
console.log(typeof myObj); //object

//function
const myFunction=function(){
    console.log("Good morning")
}                               
console.log(typeof myFunction); //function

//Basically typeof of null is OBJECT, rest same