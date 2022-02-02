const products=[
    {nsme:'phone', price:10, quantity:2},
    {nsme:'shirt', price:5, quantity:3},
    {nsme:'laptop', price:2, quantity:1},
]
let totalPrice=0;
for(const product of products){
    let totalProductPrice=product.price*product.quantity;
    totalPrice=totalPrice+totalProductPrice;
}
console.log('your total shope price =',totalPrice);