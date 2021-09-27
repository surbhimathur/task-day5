const rotate=function(k)
{
    var arr=[1,2,3,4,5,6];
    var element;
    for(var i=0;i<k;i++)
    {
        element=arr.shift();
        arr.push(element);
    }
    console.log(arr);
}
rotate(3);