arr1 = [3,7,34,90,12]
let lastElement = arr1[arr1.length - 1];
console.log(lastElement)

arr2 = [true, "green", "where",12,56]
let lastElement2=arr2[arr2.length-1]
console.log(lastElement2)

const a= ["Cow", "Bird", "Snake", "Dog"];
console.log(a.join(" "));
 

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
  arr3.sort();
console.log(arr3)

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let uniquearr = [...new Set(arr)];
console.log(uniquearr);

const arr5 = ["the", "way", "x", 4];
// let x= arr5.find(arr5[1]);
// console.log(x)
let y= "way"

if(arr5.indexOf(y)>-1){
  console.log(y)
}
 
  
else {console.log("the search word was not found");

}
let word = "sevink"
var sortedstring=word.split("").sort().join("")
 console.log(sortedstring)