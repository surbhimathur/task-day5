var ar=[34,56,29,10];
const summ=(...arr)=>
{
    
    var cal=0;
    for(var i=0;i<arr.length;i++){
        cal=cal+arr[i];
    }
    return cal;
}

var display=summ(...ar);
console.log(`Sum of array elements is ${display}`);