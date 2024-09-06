function EvenNumberCount(numbers)
{
    let cnt=0;
    for(let number of numbers)
    {
        if(number%2==0)
        {
            cnt++;
        }
    }
    return cnt;
}
let numbers=[1,2,3,4,5,6,7,8,9,10];
const result=EvenNumberCount(numbers);
console.log(result);
