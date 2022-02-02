function woodCalculator(chair,table,bed){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairQuantityWood=chair*perChairWood;
    const tableQuantityWood=table*perTableWood;
    const bedQuantityWood=bed*perBedWood;

    const totalWood=chairQuantityWood+tableQuantityWood+bedQuantityWood;
    return totalWood;
}
const result=woodCalculator(0,0,2);
console.log(result);