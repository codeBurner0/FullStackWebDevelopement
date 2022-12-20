// We have an object of customers for our food delivery app with the information 
// about their past orders with order values. 
// Write a JavaScript program to give a "Premium Membership" to the customer if the
// customer has made at least 5 orders of the minimum value of 20. 
// The customers and their past order history is given below:
customers_data={
'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57] 
}
var n=customers_data.Zeeshan;
var count=0;
for(let i=0;i<n.length;i++){
    if(n[i]>=20){
        count++;
    }
}
if(count>=5){
    console.log("This customer can get premium");
}
else{
    console.log("This customer cannot get premium");
}