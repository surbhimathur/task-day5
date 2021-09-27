
const title=function (str) {

   str = str.toLowerCase().split(" ");
  
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   
   }
   return str.join(" "); 
}
 
var a= title("hello everyone. how are you");
console.log(a);