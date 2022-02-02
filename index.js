function animals(mils){
    const perMils5=5;
    const perMils10=10;
    const perMils10Plus=15;
    if(mils<=5){
        const total5Mils=mils*perMils5;
        return total5Mils;
    }
    else if(mils<=10){
        const frist5Mils=5*perMils5;
        const restMils=mils-5;
        const total10mils=restMils*perMils10;
        const total10milsAnimals=total10mils+frist5Mils;
        return total10milsAnimals;
    }
    else{
        const second10Mils=10*perMils10;
        const restMils=mils-10;
        const total10Plus=restMils*perMils10Plus;
        const total10MilsPlus=total10Plus+second10Mils;
        return total10MilsPlus;
    }
}
const totals=animals(12);
console.log(totals);
