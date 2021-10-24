let myArray = new Array();
for(i=0;i<=10;i++)
{
    let arrayElements=Math.floor(Math.random()*888)+100;
    myArray[i]=arrayElements;
}
console.log(...myArray);
var biggest = myArray[0];
var nextbiggest = myArray[0];
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]>biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
            nextbiggest = myArray[i];
    }
    
console.log("The second Biggest Element in an array is : "+nextbiggest);
var smallest = myArray[0];
var nextsmallest = myArray[0];
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]<smallest){
            nextsmallest = smallest;
            smallest = myArray[i];
        }
        else if(myArray[i]<nextsmallest && myArray[i]!=smallest)
        nextsmallest = myArray[i];
    }
    
console.log("The second smallest Element in an array is : "+nextsmallest);