var num=[1,2,3,4,2,4,5,8];
const duplicate=function(...n){
    var dup=[];
    var len=n.length;
    for(var i=0;i<len;i++)
    {
        
        if(dup.indexOf(n[i])===-1){
            dup.push(n[i]);
        }
       
    }
    console.log(dup);
}

    

duplicate(...num);