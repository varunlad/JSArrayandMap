console.log("The repeted Digits number are")
let myArray = new Array();
for(i=11;i<=100;i++)
{
    if(i%11==0)
    {
     myArray.push(i);
    }
}
console.log(...myArray)