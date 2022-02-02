const phones=[
    {
        name:'symphone',
        price:5000,
        ram:2,
        camera:6
    },
    {
        name:'samsung',
        price:8000,
        ram:4,
        camera:8
    },
    {
        name:'htc',
        price:1500,
        ram:4,
        camera:7
    }
]
let cheapest=phones[0];
for(const phone of phones){
    if(phone.ram<cheapest.ram){
        cheapest=phone;
    }
}
console.log(cheapest);