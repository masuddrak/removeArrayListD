const names=['abul', 'kabul','jabul','kabul','rana'];

function removeDuplict(names){
    const unique=[];
    for(const element of names){
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }return unique;
}
var result=removeDuplict(names);
console.log(result);