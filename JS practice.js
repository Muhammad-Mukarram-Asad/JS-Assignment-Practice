var f = prompt(" Enter first name:");
var l = prompt(" Enter last name:");
var full = f + l;
console.log(full);

// Question: 01 , 02  >>> Done

// first method
var str = "Ali and babar are best friends and they both play cricket.";
var str_array = str.split(" ");
console.log(str_array);

for(var i = 0 ; i<str_array.length ; i++)
{
    if(str_array[i] == "and")
    {
        str_array[i] = "&";
    }
}
str = str_array.join(" ");
console.log(str);

// second method
var str = "Ali and babar are best friends and they both play cricket.";
console.log(str.replaceAll("and" , "&"));

// third method
var str = "Ali and babar are best friends and they both play cricket.";
console.log(str);

for(var i = 0 ; i<str.length ; i++)
{
    // i = 4
    if(str.slice(i, i+3) == "and")
    {
        var first_part = str.slice(0,i); // (0,4)
        var new_text = "&";
        var last_part = str.slice(i+3); // (d ka baad sa lena hai)
        
        str = first_part + new_text + last_part;
    }
}
console.log(str);

var website = " www.youtube.com";
website.slice(website.indexOf(".")) -->> .youtube.com
website.slice(website.indexOf(".")+1)  --> youtube.com


var text = "javascript";
text[0].toUpperCase() + text.slice(1);

var str = "the quick brown fox jumps over the lazy dog.";
var count = 0;

for(var i = 0 ; i<str.length ; i++)
{
   if(str.slice(i, i+3).toLowerCase() == "the")
   {
    count+=1;
   }
}
console.log(count);
