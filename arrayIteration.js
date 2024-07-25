const numbers=[1,2,3,4,5]
numbers.filter((numbers,index,Array)=>{// filter works like for loop it will iterate on every index and move forward to next 
    console.log('The numbers,', numbers);
    console.log('The index,', index);
    console.log('The array',Array);
})
//find even numbers from an array
const num2=[2,4,5,7,8,10]
const evenNumbers= num2.filter(num=>num%2===0)
console.log(evenNumbers);
//find odd numbers from an array
const num3=[1,2,3,5,9,12,3]
const oddNumbers=num3.filter(num=>num%2!==0)
console.log(oddNumbers);

//Map method
const num4=[1,2,3,4,5]
const sqrNumbers=num4.map((num,index,array)=>num*num)
console.log(sqrNumbers);

//Find method
const fruits=['Apple', 'Banana', 'Peach', 'Cherry']
const longesAlphabet=fruits.find(fruit=>fruit.length>=6)// it will return the first met condition and execution will stop 
console.log("The longest fruit name is ",longesAlphabet);