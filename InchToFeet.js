function InchToFeet(m)
{
    let y=m/12;
let feet=parseInt(y);
let inch=m%12;
convert=feet+" Feet "+inch+" Inch"
return convert;
}
let x=75;
let result=InchToFeet(x);
console.log(result);
