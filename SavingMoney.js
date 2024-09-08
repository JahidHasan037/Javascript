function SavingMoney(y)
{
    if(y>=3000){
let saving=y-(y*(20/100));
return saving;}
else{
    return 'Earn More';
}
    
}

let x=2000;
let result=SavingMoney(x);
console.log(result);