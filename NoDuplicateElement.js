function NoDuplicateElement(Arr)
{
    let unique=[];
    for(let item of Arr)
    {
        if(unique.includes(item)===false)
        {
            unique.push(item);
        }
    }
    return unique;

}
let Arr=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0];
const result=NoDuplicateElement(Arr);
console.log(result);