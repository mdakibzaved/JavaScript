//MORDERN JAVASCRIPT

/*
LET,CONT VS VAR
var --> function scope
let & const --> block scope  (where only you can access)   */

/*
//ex:- const
const myName = "AkibZaved";
console.log(myName); 
myName = "AdilShaikh";   //can't reAssigned  it give type error
console.log(myName);  */

/*
//ex:- var & let
function paymentData(){
    var userName = 'Adnan Shaikh';
    console.log(userName);

    if(1){
        let nickName = 'Sahebaz khan';  //function scope
        console.log(userName);
        console.log(nickName);
    }
    console.log(nickName);  //can't access nickName due-to (block scope)  //Reference error
}
paymentData();        */


/*
//Template literals (Template string)
for (let num=1; num<=10;num++){
    let table_num = 8;
    console.log(`${table_num} * ${num} = ${table_num * num}`); 
}
let a=9,b=8  
console.log(`this is templateLitrals ${a} _ ${b}  --> ${a+b}`)   */

/*
//Default Parameters
function mul(a,b=7){
    return a*b;
}
console.log(mul(4,8));  //rewrite ¯\_(ツ)_/¯     */


/*
//FAT ARROW FUNCTION :- difine then call concept
const sum = () =>   console.log(`sum of a and b is ${(a=8)+(b=7)}`);    //in 1-line code no need to write return keyword
console.log(sum());    */


/*
// Arrays 
var myCollection = ['smartwatch','phone','lapi','bike'];

for (let i = 0; i < myCollection.length; i++) {
    console.log(myCollection[i]);
}

// for in loop
for (const index in myCollection) {      //it return index
    console.log(index); 
}

//for of loop
for (let element of myCollection) {      //it return array element
    console.log(element);   
}

//forEach loop
let Cars = ['Fararri','Lamborgni','MAclern','Bmw'];
Cars.forEach((element,index,array) => {
    console.log(`${element} : ${[index]} => ${array}`);
});

*/

// //Clone Array:
// let arry1 =['car1','car2']
// // let arr2 = arr1 //pointing same arry means changing in arr1 refect in arr2
// let array2 =arry1.slice(0)
// let arr2 =[].concat(arry1)
// let arry2 = [...arry1] //spread opertor

/*
//---CRUD Operation
// pushMethod:- add element in last of the array and return new length of array
const proCoders = ['Shradha','thapa','Fraz','harry','Babbar'];
proCoders.push('Rohit','zaved');  
proCoders.unshift('XD','lol');      //unshift:-add element in first of the array
console.log(proCoders);

--------
//popMethod:- remove element of the last portion of the array and return it.
const plants = ['broccoli', 'cauliflower', 'kale', 'tomato','cabbage'];
console.log(plants.pop(plants[4]));
console.log(plants.shift()); //shiftMethod:- remove element from first

---------
//splice():-add & remove from the array
const months = ['jan','feb','march','April','july','Aug'];

const newMonth = months.splice(4,0,'june');
console.log(months);    //add june at index 4 and delete 0 element then passess string
console.log(newMonth);  //it will return [] due to it mostly uses for delete we did not delete

//Update march to March
const updateMonth = months.splice(2,1,'March'); //
console.log(months);

//find inndex & put it to work in best way
var findIndex = months.indexOf('Aug');   
if(findIndex != -1){
    const updateMonth = console.log(months.splice(findIndex,1,'AUG'));
    console.log(months);
} else{
    console.log('N0 such a data found!');
}

//deleting july 
findIndex = months.indexOf('july');
console.log(months.splice(findIndex,1));  //if we put 1 instead of 2 the delete itself and after 1 place data also delete

console.log(months) 

*/





//--Array Map and Reduce Method  🤷‍♂️

//=>Array.prototype.map
// let newArray = arr.map(callback(currentValue[,index[,array]])){
// } //it return element for newArray, after executing something [,thisArg]
//it return new array without mutating the Orignal array

// const arr1 = [1,21,33,41,34];
// let newArr = arr1.map((curElem,index,arr)=>{
//     return curElem>9;
// })
// console.log(arr1)
// console.log(newArr)

// const array1 = [2,4,54,34,45];
// let newArray = array1.map((curElem,index,arr)=>{    //ForEach-> return undefined
//     return `Index no = ${index} and the value is ${curElem} belong to ${arr}` ;
// })
// console.log(newArray)   //map is used to Call API

// //1:Find the square root of each element in an array
//     let arr = [25,36,49,64,81];
//     let newArraysqrt = arr.map((curElem,index,arr) =>{
//         return Math.sqrt(curElem);
//     })
//     console.log(newArraysqrt)

// //2:Mutiply each element by 2 and return only those element which are greater than 10 and (aslo sum these element) 

    //chaining 
    // let arr = [2,3,4,6,8];
    // let newArray = arr.map((curElem,index,arr) => curElem*2).filter((curElem,index,arr)=>curElem>10).reduce((accumulator,curElem)=> accumulator+=curElem)  //28 print
    // console.log(newArray)



// //--Reduce Method:   flatten an array means to convert the 3d or 2d array into a single dimensional array
    // //it tkaes 4 Argument   --> Accumulator, Current Value ,Current Index ,Source Array
    //  let arr = [3 , 4 ,5 ,8];
    //  let sum = arr.reduce((accumulator,curElem,index,arr) =>{
    //   debugger;
    //     return accumulator+=curElem ;
    //  })
    //  console.log(sum)
     

    // // Q:-  4subj 1sub=7 add in array
    // // 3subj =[5,6,7]
    // let subj = [5 , 6 ,2]
    // let addremain_Sub = subj.reduce((accumulator,curElem,index,arr)=>{

    // },7) ;
    
    //--> How to fatten an array - convert 2d & 3d array into one dimensional array
    // const arrCars = [
    //     ['BMW','Fararri'],
    //     ['Lamo','Maclern']
    //     ['tata','Honda']
    //     ['RollsRoys','toyota']  //nested array never work here inside arrCars
    // ];
    // let flatArr = arrCars.reduce((accum,currVal)=>{
    //     return accum.concat(currVal);
    // })
 
    




    //STRING:- A javascript string is zero or more characters written inside quotes which is '' or ""
    //it can be create as primitive fromstring litrals or as object using String() constracter 

    // let myName = 'AkiB Zaved';
    // let luckyName = new String('Nadim Shaikh');  // string create by String Constructor
    // console.log(luckyName)    

    //===>
    //--1. find length
    // console.log(luckyName.length);

    //-- 2.Escape Character
    // let escIntro = "Hello Iam '\Mohammad Akib-Zaved \ and you!";  //vice versa '' kiske sath " " sath 🤷‍♂️
    // let ecsFr = 'Iam Lazy  "Person" with smart hacks!';
    // console.log(escIntro);
    // console.log(ecsFr);

    //--Finding String in a String
    // const myBoiData = 'Hello Iam Mohammad AKib Zaved currently doing BCA from tias Affliated by GGSIPU ';
    // console.log(myBoiData.indexOf('BCA',10));  //10 it mean where do you want to start from::
    // console.log(myBoiData.lastIndexOf('BCA'));
    // console.log(myBoiData.search("AKib"));  //search same,its take only 1 argue



    //----Extracting String Parts***

    //-->Slice() method is used to collect certain Part in a String. it start from 1 argument but not include end argument
    // var fruits = "Apple ,Banana, Kiwi , Mango";
    // let newList = fruits.slice(0,4);
    // console.log(newList)
    // console.log(fruits.slice(7,-2));    //-2 means it will goes at last and and remove 2 word from string



    // Challenge Question:- dispaly only 280 of String like used in twitter
    //  let myTweets = "Zero-based index at which to start extraction.A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.If start is undefined, slice starts from the index 0.If start is greater than the index range of the sequence, an empty array is returned";
    //  let tweetReturn280 = myTweets.slice(0,280);
    //  console.log(tweetReturn280);
    //  console.log(tweetReturn280.length);


    //-->substring():- similar as slice() diffrence is that substring cannot accept -ve index..
    // var str = "Apple:0 ,Banana, Kiwi , Mango";
    // let p1 = str.substring(0,7)  //print also from (7,-2) -ve mean return string from 0 position 
    // let p2 = str.substring()  
    // console.log(p2);
    // console.log(p1);

     //-->substr(start,lengthOfExtractedPart) :- from this we can easily find cahracter from string from backward side
    //  var str = "Apple ,Banana, Kiwi , Mango";
    //  let p1 = str.substr(-5);  //output Mango :)
    //  console.log(p1);
     
    //-->Replace String Content :-  replace string with given string but if string present two times in main string it change first meet string only 🤷‍♂️
    // let myIntro = 'this is akib & akib  is lazy person ';    //not change 2nd akib
    // const repalceData = myIntro.replace('akib','AKIB-ZAVED');
    // console.log(repalceData);
    
     
    //Extracting String Characters:-
    //-->charAt() Method returns the character at a specified index (position) in a String
    // var str = "KHATAM TATA";
    // console.log(str.charAt(5))

    // -->charCodeAt() :- method returns the unicode of the character at specified index in a string.
    // var str = "HELLO WORLD";
    // console.log(str.charCodeAt(0));

    // Challenge Question:- find the unicode of last character in a string
    // var str = "HELLO WORLD";
    // let lastChar = str.length;  
    // console.log(str.charCodeAt(lastChar-1));

    //-->Property Access ECMAScript 5 allows property access [] on string
    // var str = "Tonny";
    // console.log(str[0]);  // output:- T

    //toUpperCase() & toLowerCase() 
    // let type = 'Shakt Londa';
    // console.log(type.toLocaleLowerCase());
    // console.log(type.toLocaleUpperCase());

    // .concat() Method:-  is same + no diffrence
    // let fName = 'Mohammad';
    // let lName = 'AkibZaved';
    // console.log(fName.concat(lName));
    // console.log(fName+lName);
    // console.log(`${fName}    ${lName}`);    //no diffrence

    //trim() :- remove space from string both sides of string
    // var str = '              Inclab JindaBaad   ';
    // console.log(str.trim());

    // split() method:-  A string can be converted to an array with split method
    // let str = "K,H,M L R|O";
    // console.log(str.split(','));   //it sperate with commas [ 'K', 'H', 'M L R|O' ]
    // console.log(str.split('|'));    //it sperate with |  [ 'K,H,M L R', 'O' ]
    // console.log(str.split(" "));      //it sperate with space [ 'K,H,M', 'L', 'R|O' ]
     

     

//    ⫸⫸ DATE 
/*
    // new Date():- Date Object are created with the new Date() Constructor
    let currDate = new Date();      //give as to standard time
    console.log(currDate);
    
    console.log(new Date().toLocaleString());   //13/8/2022   11:44:14 pm
    console.log(new Date().toString());   //Sat Aug 13 2022 23:41:32 GMT+0530 (India Standard Time)
    

    // --> Date.now() :-return date in millisecond elapsed since January 1,1970 
    console.log(Date.now()); 
     
    var d = new Date(1660417121715);    // millisecond from date & time we get
    console.log(d.toLocaleString());

    // set date --> new Date(year,month,day,hour,minute,second,millisecond) 
    //    jun is 0. December is 11.
    var d = new Date(2022,7,13,11,59,50,0);
    console.log(d.toLocaleString());
    

    // new Date(dateString) creates a new date object from a date string
    var d = new Date(" 14 August 2022 00:16:00");
    console.log(d);

    // Q:
    var d = new Date(0);    //1/1/1970, 5:30:00 am  month to dena hi padega
    console.log(d.toLocaleString());


    // ----GET
    // --How to get indivisual date
    let d = new Date ();
    console.log(d.toLocaleString())
    console.log(d.getFullYear())
    console.log(d.getMonth())
    console.log(d.getDate())
    console.log(d.getDay())

    // --How to get indiviual  time
    let d = new Date();
    console.log(d.getHours())    
    console.log(d.getMinutes())   
    console.log(d.getSeconds())
    console.log(d.getMilliseconds())

    // ----SET
    // --How to set indivisual date
    let d = new Date();
    console.log(d.setFullYear(2022))         //1660452743122
    console.log(d.setFullYear(2022,7,14))    //1660452743122
    console.log(d.setMonth(7))              //1660452743122
    console.log(d.setHours(12))            //1660452743122
    console.log(d.setDate(14))             //1660459943122
    console.log(d.setSeconds(45))           //1660459965122

    // --How to set indivisual time
    let currTime = new Date();
    console.log(currTime.setTime())
    console.log(currTime.setHours())
    console.log(currTime.setMinutes())
    console.log(currTime.setMilliseconds())

    // Practice Time:- to get indiually date time  ™️
    console.log(new Date().toLocaleDateString())     //14/8/2022
    console.log(new Date().toLocaleTimeString())     //2:26:14 pm
    console.log(new Date().toLocaleString())         //14/8/2022, 2:26:14 pm
*/




/*
    // ⫸⫸ MATH OBJECTS
    //The javascript alllow to us to perform mathmetical operation 

    //--PI value
    console.log(Math.PI);

    console.log(Math.round(2.45))  //return rounded to its nearest number!

    console.log(Math.pow(3,3));

    console.log(Math.sqrt(25))

    console.log(Math.abs(-34.5))

    console.log(Math.ceil(2.3))
    
    console.log(Math.floor(2.8))

    console.log(Math.min(23,45,23,56,3))

    console.log(Math.max(23,54,54,786))

    console.log(Math.random())      //value return b/w 0-1 -->   ex:- 0.34453
    console.log(Math.trunc(Math.random()*10))
*/




    //### DOM (DOCUMENT OBJECT MODEL) & BOM (Browser OBJECT MODEL)

    
    /* --DOM is Document Object Model which deals with the ducument the HTML Element themselves 
    ex:- change bg color to red :: ducument.body.style.background  */
    
    
    /*  --BOM is Browser Object Model which deals with Browser Component like loctaion,history,navigator,screen
    in Simple meaning all the  Window Operation which comes under BOM are Performed using BOM  */

    
    //=>Practicle on History Object
    // Function alert/confirm/prompt are also a part of BOM ..
    
    /*
    alert(location.href);   //shows current URL
    if(confirm('Want to youtube !!'));
        location.href("https://www.youtube.com/"); */


    

    

    

     








