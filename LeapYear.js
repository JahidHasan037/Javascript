function LeapYear(year)
{
    if(year%400===0)
    {
        return true;
    }
    else if(year%4===0&&year%100!=0)
    {
        return true;
    }
    else{
        return false;
    }
}
const result=LeapYear(2024);
console.log(result);