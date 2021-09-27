var ar1=[2,1,8,5,4,9];
var ar2=[7,3,12,6,10,11];
var ar3=[...ar1,...ar2];
    ar3.sort(function(a,b){return a-b});
    

const median=function(...a)
{
    var len=(a.length)/2;
    var c=len-1;
    var sum=(a[len]+a[c])/2;
    return sum;
}
    

var s=median(...ar3);
console.log(s);

