//primitive data types

//7 types:string, number, boolean, null, undefined, symbol, bigint
//
const score=100;
//const score:number=100;it is for typescript
const scorevalue=100.3
const isLoggedIn=true
const ousideTemp=null
let userEmail=undefined

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId) //false
const bigNumber=9007199254740991n

//reference data types(non-primitive data types)
//array,object, function

const heros=["shaktiman","naagraj","doga"]

const heroDetails={name:"shaktiman", age:30}

const myFunction=function(){
    console.log("hello world")

};




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive data types) and heap(reference data types)
let myName="kunal" 
let anotherame=myName
anotherame="kumar"
console.log(myName)
console.log(anotherame)

let user1={name:"kunal",age:22}

let user2=user1
user2.age=23
console.log(user1.age)
console.log(user2.age)
