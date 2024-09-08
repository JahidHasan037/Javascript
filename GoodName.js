function GoodBadName(name)
{
   
    if(typeof name==='string')
    {
        let x=name.length-1;
    if(name[x]==='a'||name[x]==='e'||name[x]==='i'||name[x]==='o'||name[x]==='u'||name[x]==='y'||name[x]==='w')
   { 
    return 'Good Name';
   }
   else 
   {
    return 'Bad Name';
   }
 }
 else{
    return 'Invalid';
 }

}
const result=GoodBadName(JAhid);
console.log(result);