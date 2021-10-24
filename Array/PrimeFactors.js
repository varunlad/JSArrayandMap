const promt=require('prompt-sync')();
let myArray = new Array();
const number= promt ("Enter Value to get is prime factors");
for(i=2;i<number/2;i++)
{
    if(number%i==0)
    {
       myArray.push(i);
    }
}
console.log(...myArray)
