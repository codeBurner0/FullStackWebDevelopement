console.clear()

var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
mFriends.splice(3, 0, 'Donna', 'Rachel')

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to  be added
console.log(mFriends)

mFriends.splice(0, 0, 'Harvey')
console.log(mFriends)

// Delete item at specific position
mFriends.splice(2, 1)
console.log(mFriends)

mFriends.splice(0, 2)
console.log(mFriends)

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('====================================')
console.log(mFriends)
console.log(mOfficeFriends)
console.log(mAllFriends)

//Sorting Ascending and Descending

mAllFriends.sort()
console.log(mAllFriends)

mAllFriends.reverse()
console.log(mAllFriends)

var total =10;
function sum(n,m){
    console.log(total)
    total=n+m
     total
    console.log(total)
}
sum(20,30)