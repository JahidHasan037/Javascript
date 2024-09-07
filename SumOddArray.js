function SumOddArray(numbers)
{
    let sum=0,cnt=0;
    let odd=[];
    for(let number of numbers)
    {
        if(number%2===1)
        {
            odd.push(number);
            cnt++;
        }
    }
    for(let number of odd)
    {
        sum+=number;
    }

    return sum/cnt;
}
let numbers=[1,2,3,4,5,,6,7,8,9];
let result= SumOddArray(numbers);
console.log(result);
