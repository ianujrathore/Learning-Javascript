🚀 JavaScript Basics

«JavaScript is the language that brings websites to life. It allows developers to create interactive, dynamic, and responsive web applications. Along with HTML (structure) and CSS (styling), JavaScript forms the foundation of modern web development.»

---

📌 What is JavaScript?

JavaScript is a high-level, lightweight, and interpreted programming language primarily used for web development. It can run directly in browsers and also on servers using environments like Node.js.

Key Features

- ⚡ Fast and lightweight
- 🌐 Runs in all modern browsers
- 🔄 Event-driven and asynchronous
- 🧩 Supports Object-Oriented and Functional Programming
- 📦 Huge ecosystem with libraries and frameworks

---

📝 Variables

Variables are used to store data.

let name = "John";
const age = 25;
var city = "Delhi";

- "let" → Can be reassigned
- "const" → Cannot be reassigned
- "var" → Older way of declaring variables (generally avoided)

---

🔢 Data Types

JavaScript supports multiple data types:

let text = "Hello";      // String
let number = 100;        // Number
let isActive = true;     // Boolean
let value = null;        // Null
let data;                // Undefined
let person = {           // Object
  name: "Alice"
};

---

➕ Operators

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

Comparison operators:

console.log(a == b);
console.log(a === b);
console.log(a > b);
console.log(a < b);

---

🔀 Conditional Statements

let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

Using "switch":

let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}

---

🔁 Loops

For Loop

for(let i = 1; i <= 5; i++){
    console.log(i);
}

While Loop

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

For...of Loop

const fruits = ["Apple", "Banana", "Mango"];

for(const fruit of fruits){
    console.log(fruit);
}

---

🎯 Functions

Functions allow code reuse.

function greet(name){
    return `Hello, ${name}!`;
}

console.log(greet("John"));

Arrow Function:

const add = (a, b) => a + b;

console.log(add(5, 3));

---

📚 Arrays

const colors = ["Red", "Blue", "Green"];

console.log(colors[0]);

colors.push("Yellow");

console.log(colors);

Common methods:

- "push()"
- "pop()"
- "map()"
- "filter()"
- "forEach()"

---

🏗️ Objects

const student = {
    name: "Alice",
    age: 21,
    course: "Computer Science"
};

console.log(student.name);
console.log(student.course);

---

⏳ Promises & Async/Await

function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 1000);
    });
}

async function display(){
    const result = await fetchData();
    console.log(result);
}

display();

---

🌐 DOM Manipulation

JavaScript can modify HTML elements dynamically.

document.getElementById("title").textContent = "Welcome!";

Adding an event:

document.getElementById("btn")
.addEventListener("click", () => {
    alert("Button Clicked!");
});

---

✅ Why Learn JavaScript?

- 🌍 Powers interactive websites
- 📱 Used for web, mobile, and desktop applications
- 🚀 Works with popular frameworks like React, Vue, and Angular
- 💼 One of the most in-demand programming languages
- 🔥 Essential skill for modern full-stack development

«"Write once, run everywhere on the web—JavaScript is the engine behind dynamic user experiences."»
