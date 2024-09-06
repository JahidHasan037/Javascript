function odd(number)
{
    let sum=0;
    let even=[];
    let odd=[];
    for(let number of numbers)
    {
       if(number%2==0)
       {
        even.push(number);
       }
       else{
        odd.push(number);
       }
    }
    return {even,odd};
} 
let numbers=[1,2,3,4,5,6,7,8,9];
let result=odd(numbers);
console.log(result.even);
console.log(result.odd);