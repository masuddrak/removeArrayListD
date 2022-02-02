const products=[
    {nsme:'phone', price:1000,},
    {nsme:'shirt', price:500,},
    {nsme:'laptop', price:20000,}
]
let totalPrice=0;
for(const product of products){
    totalPrice=totalPrice+product.price;
}
console.log('your total shope price =',totalPrice);