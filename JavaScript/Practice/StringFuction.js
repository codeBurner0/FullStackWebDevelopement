var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
console.log(mStr.length);
console.log(mStr.indexOf("This"));
console.log(mStr.lastIndexOf("This"));
console.log(mStr.substring(0,12));
console.log(mStr.slice(-12,-10));

console.log("\n")

var str1 = 'Today is';
var str2 = ' A beautiful day '
var str3 = ' In Hawaii. '
var Result=str1.concat(' ',str2,' ',str3);
var Result1=str1+' '+str2+' '+str3;
console.log(Result)
console.log(Result1)

console.log("\n")

var mStr = 'Mo Tu We Th Fr Sa Su';
var mStr1=mStr.toUpperCase();
console.log(mStr1.split(' '))