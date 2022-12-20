console.clear()

if(5 == '5') {console.log(true)}
if(5 === 5) {console.log(true)} else {console.log(false)}
if(5 != '5') {console.log(true)} else {console.log(false)}
if(5 !== '5') {console.log(true)} else {console.log(false)}
if(15 < 15) {console.log(true)} else {console.log(false)}
if(15 <= 15 ) {console.log(true)} else {console.log(false)}
if(15 > 15) {console.log(true)} else {console.log(false)}
if(15 >= 15) {console.log(true)} else {console.log(false)}

//Logical Operators &&, ||, !
if(5 > 10 && 10 > 15) {console.log(true)} else {console.log(false)}
console.log(5 < 10 || 10 < 15)
console.log(!(5 < 10))

//Ternary Operator (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false)