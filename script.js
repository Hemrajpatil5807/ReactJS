import marks from './test.js'
import {name,clg} from './test.js'

// creating HTML element using JS
var h1 = document.createElement('h2');
// adding text to the element we can also use textContent to add text to the element
h1.innerHTML = "Hello From JS";
// appending the element to the body of the document
document.body.appendChild(h1);
console.log(name +" "+clg+" "+marks)