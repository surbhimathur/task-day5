const palindromee=(b)=>{
   
    var len=b.length;
    for(var i=0; i<len/2; i++){
        if(b[i]===b[len-1-i])
        {
            return true;
        }
        else{
            return false;
        }
    }

    
}
var array=["pop","madam","surbhi","mathur","dad","121","sandesh"];
array.forEach(function(element)
{
    const ispalindrome=palindromee(element);
    if(ispalindrome)
    {
        console.log(element);
    }
});