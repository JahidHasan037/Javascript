function ReturnOddEven(number)
{
        if(number%2==0)
        {
        return 'Even';
        }
        else{
            return 'odd';
        }
}
let number=2;
const result=ReturnOddEven(number);
console.log(result);
