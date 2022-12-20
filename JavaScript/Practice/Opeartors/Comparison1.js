var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);
if (d == 1){
console.log((a * (c - b) / e + (b + c)));
} else {
console.log((e * (c + a) / (b + c) + a));
}
