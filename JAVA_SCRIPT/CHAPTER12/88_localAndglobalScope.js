
//global scope
a = 786;  //; is needed when you used ()()IIFE func


//localScope 
(() => {
    let b =9;
    console.log(b);
})()


p= 0
// console.log(b)   //b is not defined in globalscope
console.log(a)




