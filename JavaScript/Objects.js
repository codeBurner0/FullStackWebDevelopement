console.clear()

// var mCars = {
// 	"p1" : "350 kmph",
// 	"gallardo" : '320 kmph',
// 	"veyron" : '409 kmph',
// 	"agera" : '429 kmph'
// }

// console.log(mCars)
// console.log(typeof(mCars))


var mAgera = {
	name: "Agera",
	manufacturer: {
		name: "Koenigsegg",
		loaction: "Sweden"
	},
	topSpeed: 429,
	color: "Black",
	spoilers: false,
	applyBrakes: function() {
		setTimeout(function() {
			console.log('Car Stopped');
		}, 5000)
	}
}

console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.manufacturer)
console.log(mAgera.manufacturer.name)
console.log(mAgera.applyBrakes())
console.log(mAgera.applyBrakes)