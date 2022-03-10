// anonymous function
// a.Print odd numbers in an array

var getdetails=function(arr){
let odd=[]
for(let i in arr){
if(arr[i]%2==1)
{
    odd.push(arr[i])
}}console.log(odd)
}
getdetails([1,2,3,4,5,6,7,8,9,10])

//iife function
(function(arr){
    let odd=[]
    for(let i in arr){
    if(arr[i]%2==1)
    {
        odd.push(arr[i])
    }}console.log(odd)
    })([1,2,3,4,5,6,7,8,9,10])


//b.Convert all the strings to title caps in a string array
// anonmous function
var getstr=function (str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(getstr("good morning to everyone"));


//iife function
(function () {
    let getstr=function(str){
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
    console.log(getstr("good morning to everyone"))
})()

  

//c.Sum of all numbers in an array
//anonmous function
var getsum=function(arr){
    let sum=0
    for(let i in arr){
        sum=sum+arr[i]
        
        }console.log(sum)
    }
    getsum([1,2,3,4,5,6,7,8,9,10])  

// iife function
(function(arr){
    let sum=0
    for(let i in arr){
        sum=sum+arr[i]
        
        }console.log(sum)
    })([1,2,3,4,5,6,7,8,9,10]) 


// d.Return all the prime numbers in an array
// anonymous function
var primearray=  function(numArray){
  let prime = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(prime);
  }
  primearray([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // iife function
  (function(numArray){
    let prime = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
      console.log(prime);
    })([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  


// e.Return all the palindromes in an array
//anonymous function
var getpalindrom=function(arr){
    let arrReverse =arr.split("").reverse().join("")
    if(arr===arrReverse){
       console.log("this is palindrome")
    }
   else{
    return false
     }}
 getpalindrom("civic")  

//  iife function
(function(arr){
    let arrReverse =arr.split("").reverse().join("")
    if(arr===arrReverse){
       console.log("this is palindrome")
    }
   else{
    return false
     }})("karak") 
 

     //f.Return median of two sorted arrays of the same size
     //anonymous function
     var median=function (a,b){
        let c=[...a,...b].sort((a,b)=>a-b);
        const half=c.length/2|0;
        if(c.length%2)
        returnc[half]
        return (c[half]+c[half-1])/2
    }
    const arr1=[1,12,15,26,38]
    const arr2=[2,13,18,30,45]
    console.log(median(arr1,arr2))
    
    // iife function
(function(){
    var median=function (a,b){
      let c=[...a,...b].sort((a,b)=>a-b);
      const half=c.length/2|0;
      if(c.length%2)
      returnc[half]
      return (c[half]+c[half-1])/2
    }
    const arr1=[1,12,15,26,38]
    const arr2=[2,13,18,30,45]
    console.log(median(arr1,arr2))
  })(); 
  

//g.  Remove duplicates from an array
// anonymous function
var removeDuplicateArrayValues=function (arr) {
        return arr.filter((value, index) => (
          arr.indexOf(value) === index
        ));
      }
      
      const letters = [ 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'x', 'z', 'z' ]
      
      console.log(removeDuplicateArrayValues(letters))
      
      //iife function
      (function (arr) {
        var duparr= arr.filter((value, index) => (
          arr.indexOf(value) === index
        ));console.log(duparr)
      }) ([ 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'x', 'z', 'z' ])



// h.Rotate an array by k times
// anonymous function
var getarr=function(nums,k){
for(let i=0;i<k;i++){
nums.unshift(nums.pop())
}
return nums;
}
console.log(getarr([1,2,3,4,5],[3]))  

// iife function
    (function(){
      let getarr=(nums,k)=>{
    for(let i=0;i<k;i++){
    nums.unshift(nums.pop())
    return nums;
    }
      }
    console.log(getarr([1,2,3,4,5],[1]))
    })()
