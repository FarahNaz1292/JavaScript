//Slice Method
let fruits=['Apple','Banana','Cherry','Date']
const slicedFruits= fruits.slice(1,3) // it will exclude the third index value
console.log(slicedFruits); //Output [ 'Banana', 'Cherry' ]

//splice Method
const colors=["Red","Blue","green","yellow"]
const removedColors=colors.splice(1,2, "violet", "pink") //giving the index all the new elements will be placed on the spot of removed elements 
console.log("Removed", removedColors);// a mutable array is returened
console.log("Original colors Array", colors);  //OUtput:Removed [ 'Blue', 'green' ]
//Original colors Array [ 'Red', 'violet', 'pink', 'yellow' ]

//split Method
const sentence= "A brown fox jumps on a lazy dog. " 
const word=sentence.split(" ")// it will split the string into an array.
console.log('The words are :',word); //Output:The words are : [
//  'A',    'brown',
//  'fox',  'jumps',
// 'on',   'a',
//  'lazy', 'dog.',
//  ''
//]