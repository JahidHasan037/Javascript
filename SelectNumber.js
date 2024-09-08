function SelectNumber(number)
{
    let NewArr=[];
    for(let element of number)
    {
        if(typeof element==='number')
        {
            NewArr.push(element);
        }
    }
    if(NewArr.length!=0)
    {
        return NewArr;
    }
    else{
        return 'Invalid';
    }

}

let arr=['jahid',1,2,3,'kuddus','3'];
let result=SelectNumber(arr);
console.log(result);