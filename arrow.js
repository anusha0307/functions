// 3.Do the below programs in arrow functions
// //a.Print odd numbers in an array

var getdetails=(arr)=>{
    let odd=[]
    for(let i in arr){
    if(arr[i]%2==1)
    {
        odd.push(arr[i])
    }}console.log(odd)
    }
    getdetails([1,2,3,4,5,6,7,8,9,10])


// b.Convert all the strings to title caps in a string array
var getstr= (str) =>{
      return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    }
    console.log(getstr("good morning to everyone"));


// // c.Sum of all numbers in an array
var getsum=(arr)=>{
    let sum=0
    for(let i in arr){
        sum=sum+arr[i]
        
        }console.log(sum)
    }
    getsum([1,2,3,4,5,6,7,8,9,10])  


// // d.Return all the prime numbers in an array
var primearray=(numArray)=>{
    let prime = numArray.filter((number) => {
        // to check if it's a prime no - check modulo
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
      console.log(prime);
    }
    primearray([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // e.Return all the palindromes in an array
 var getpalindrom=(arr)=>{
    let arrReverse =arr.split("").reverse().join("")
    if(arr===arrReverse){
    console.log("this is palindrome")
        }
    else{
    console.log("this is not a palindrome")
         }}
    getpalindrom("civic") 