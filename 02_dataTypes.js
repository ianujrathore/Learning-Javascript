"use strict";  // Treat all JS code as newer version

let name = "SpiderMan"
let age = 18
let isPeter = true

/*
number => Range 2^53
bigint => For big numbers
string => " "
boolean = true/false
null => standalone value
undefined =>
symbol => unique
object => null
*/

console.log(typeof undefined);

// Primitive datatypes
// Number 
const score = 100

// String
const name = "Spidy"

// boolean
const isLoggedIn = true

// null
const temperature = null

// Undefined
const location = undefined

// Big Int
const num = 3535365632425463455n

// Symbol
const emp1 = Symbol('123')
const emp2 = Symbol('123')
console.log( emp1 == emp2)

// Non Primitive - Reference

// Array

const avengers = ["IronMan" , "Thor" , "SpiderMan"];

// Object

let myObj = {
    name : "Spidey",
    age : 22,
}

// Function

const myFunction = function(){
    console.log("Hello World");
}

