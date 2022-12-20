console.clear()

var myFirstString = "This is a string for Javascript string functions, Javascript"

// Returns the length of the string
console.log(myFirstString.length)

// Find index of a string inside another string
console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('This'))

// Find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'))
console.log(myFirstString.lastIndexOf('This'))

// Get a part of our string slice(start, end)
console.log(myFirstString.slice(0, 4))
console.log(myFirstString.slice(21, 31))
console.log(myFirstString.slice(-10))
console.log(myFirstString.slice(5))

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0, 4))
console.log(myFirstString.substr(21, 10))
console.log(myFirstString.substr(21))

console.log("\n")

var exampleString = "This is Javascript tutorial"

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase())

// toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())

// concat() - It merges two or more strings
var firstName = "Javascript"
var lastName = "Playground"
console.log(exampleString.concat(firstName))
console.log(exampleString.concat(' ', firstName, ' ', lastName))

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)

// trim() - It removes extra spaces
var extraSpaceString = '        mystring     '
console.log(extraSpaceString.trim())

var extraSpaceStringExample2 = '      my string    '
console.log(extraSpaceStringExample2.trim())

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))
console.log(charAtExampleString.charAt(11))


// split() splits our string on the basis of the arguments passed

var sampleString = "This is my sample string"
console.log(sampleString.split(' '))

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','))

var sampleString3 = "This is awesome"
console.log(sampleString3.split())