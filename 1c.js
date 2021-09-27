var ar=[34,56,29,10];
const sum=function(...arr)
{
    
    var cal=0;
    for(var i=0;i<arr.length;i++){
        cal=cal+arr[i];
    }
    return cal;
}

var display=sum(...ar);
console.log(`Sum of array elements is ${display}`);