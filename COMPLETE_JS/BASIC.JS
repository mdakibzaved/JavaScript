// *****Value and variable 
// var $myName ="Akib Zaved";
// var _myAge =26;

// console.log($myName);
// console.log(_myAge);



// *******Data types 
var broName ="Adil Shaikh";
var luckyNo =786;
var haveGirl =true;
var Useless =null;
var proLevel;

console.log(isNaN(proLevel));
console.log(typeof(broName));
console.log(typeof(luckyNo));
console.log(haveGirl);
console.log(Useless);
console.log(typeof(Useless));     //return object type (BUG🤖)
console.log(typeof(proLevel)); 

//chalenge time 
console.log(10+"20");
console.log(9-"2");                //num - string return num(BUG🤖)!
console.log("JAVA" + "SCRIPT");
console.log("faiz" - "Shaikh");     //return Nan because it's not a num
console.log(true + false);
console.log(true - false);   
console.log(false - true);        //0-1 --> return -1

//  1.Diffrence b/w null vs undefined
//  2.what is NaN
//  Ans: Na is  is a Property of global object
//       The initial value of NaN is Not-A-Number

//NaN Practice
console.log(Number.NaN===NaN);
console.log(NaN===NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));



/*✔️
//********Expression Operator
var a=5;
var b=5;
console.log("a and b are equal or not "+ a==b);  //return false due(+)sign 
console.log(a==b);         //return true  correct

//Challenge time 
console.log(3**4)        //3 power 4
console.log(10**-1)     // 1/10


//==>swap
var x=3;
var y=5;
var temp=x;
x=y;
y=temp;
console.log("value after swap is "+x +" "+y);

// diffrence b/w == and === 
var l=4
var m='4';
console.log(l==m)   //return true because its checking only value..
console.log(l===m)   //return false becauese its check as well as data type
*/



// *********Control Statement

// var tomr = 'rain';
// if(tomr == 'rain'){
//     console.log("take a RainCoat");
// }else{
//     console.log("No need to take rainCoat")
// }




//truthy and falsy value IN javaScript 
// falsy 0,"",undefined,NaN,false
// if(undefined){
//     console.log('hi')
// }
// else{
//     console.log('by🥲')
// }

// var age=14;
// console.log((age >= 18 )?"Hi ": "Bye Banado chai") 

// loops are skipped







