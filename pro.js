//****************************Array methods************************** */
//sorting an array sort()

var a=["arham","ramay","umer"];
document.write(a +"<br><br>");
a.sort();
document.write(a +"<br><br>");

//reverse an array reverse()

var a=["arham","ramay","umer","zohaib"];
document.write(a +"<br><br>");
a.reverse();
document.write(a +"<br><br>");

//pop an array pop() and it remove last element from array

var a=["arham","ramay","umer","zohaib"];
document.write(a +"<br><br>");
a.pop();
document.write(a +"<br><br>");

//push an array push() add an element at the last index of an array

var a=["arham","ramay","umer","zohaib"];
document.write(a +"<br><br>");
a.push("asad","rehman");
document.write(a +"<br><br>");

//shift an array shift() for removing first element from an array

var a=["arham","ramay","umer","zohaib"];
document.write(a +"<br><br>");
a.shift();
document.write(a +"<br><br>");

//unshift an array unshift() add an element at first index of an array

var a=["arham","ramay","umer","zohaib"];
document.write(a +"<br><br>");
a.unshift("umair");
document.write(a +"<br><br>");

//concat an array concat() used for connecting two array or string

var a=["arham","ramay","umer","zohaib"];
var b=a.concat("umair","AB")
document.write(b);
//or second method of cocating
var a=["arham","ramay","umer","zohaib"];
var b=["umair","ab"];
var c=["subhan","awais"];
var d=a.concat(b,c);
document.write(d);

//join an array join() join all values of an array in one string

var a=["arham","ramay","umer","zohaib"];
var c=["subhan","awais"];
var b=a.concat(c);
document.write(b);
var d=b.join("/");
document.write(d);

//slice an array slice() used for getting desired value from an array and 
//store in an new array  ****slice(start,end) parameters used in slice

var a=["arham","ramay","umer","zohaib","asad","rabi"];
document.write(a +"<br><br>");
var b=a.slice(1,4);
document.write(b);
//for negative parameters slice works as 

var a=["arham","ramay","umer","zohaib","asad","rabi"];
document.write(a +"<br><br>");
var b=a.slice(-2);
document.write(b);

//splice an array splice() used for adding or deleting an element at our desired index
//splice(index, howmany delete ,"new value")**parameters

var a=["arham","ramay","umer"];

var a=["arham","ramay","umer","zohaib","asad",];
document.write(a +"<br><br>");
a.splice(1,3,"usman","teacher");
document.write(a+"<br></br>");

//isArray an array isArray() used to check the array from many statements

//var a="arham";
//var a=10;
var a=["arham","ramay","gous"];
document.write(a +"<br><br>");
var b=Array.isArray(a);
document.write(b+"<br><br>");

//indexOf in array indexOf() used to find out any element from an array with their index no
//indexOf("search item",start)
//if we want to search an unknown element which cannot be declared in an array so it will give us alway the value -1

var a=["arham","ramay","gous","umer","umair"];
document.write(a +"<br><br>");
var b=a.indexOf("ramay",3)
document.write(b);

//lastIndexOf in an array lastIndexOf() used it can search any element from an array from the last index of an array means it is reverse of the indexOf()

var a=["arham","ramay","gous","ahmad","umair"];
document.write(a +"<br><br>");
var b=a.lastIndexOf("ahmad")
document.write(b+"<br><br>");

// includes() used for searching any element from an array
//includes("search item") then it will give true or false

var a=["arham","ramay","gous","ahmad","umair"];
document.write(a +"<br><br>");
var b=a.includes("arham");
document.write(b+"<br><br>");

//some in an array some() used for checking value like adultage>=18
var age=[10,20,30,40];
document.write(age +"<br><br>");
 var b=age.some(checkadult);
 document.write(b +"<br><br>");
//function for testing the value is greater than 18 or not. if any value true then it will give you true and it will work with function
 function checkadult(x)
 {
    return x >=18;
 }

 //every in an array every() used for checking every value is greater or equal with our compared value and it also work with the function

 var age=[10,20,30,40];
document.write(age +"<br><br>");
 var b=age.every(checkadult);
 document.write(b +"<br><br>");
//for checking every value in an array is equal or not from our checking value 18
 function checkadult(x)
 {
    return x >=18;
 }

 //for each in an array forEach() used for print any string with a sequence in an array with their index number
//forEach is a type of loop in JavaScript

var a=["arham","ramay","gous","ahmad","umair"];
a.forEach(function(x ,index){
 document.write(index+" :" + x + "<br>");
});

//map in an array map() it does not change any existing array but if we want to apply any + - * / operations with new array

var a=[10,20,30,40];

var b=a.map(test);
document.write(b);

function test(x)
{
  return x*10;
}

  //filter in an array filter() usedfor searching elements which passes our checking value and give us a new array

  var age=[10,20,30,40,];
  document.write(age +"<br><br>");

  var b=age.filter(checkAdult);
  document.write(b+"<br><br>");

  function checkAdult(check){
    return check >=20;
  }

