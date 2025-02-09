
// //== Array in Js == 
// let class12 = [12,34,67,99,false,"NotPresent"]
// console.log(class12)

// console.log(class12.length)  //finding Length
// class12[0] = 45  //update element
// class12[6] = 78   //adding element
// console.log(class12)
// console.log(typeof(class12))  



// // ▶==Array Method==
// let num = [1,3,4,5,67,7]
// let b= num.toString()   //b is now string
// console.log(b)
// console.log(num,"  ",num.join(' _ '))
// console.log(num,"  ",num.pop())  //return pop element  (🤐update original arr)
// console.log(num,"  ",num.push(9))  //return new array length  ->🤐update
// console.log(num," " ,num.shift())  //1st element delete ->(🤐update)
// console.log(num, "  ",num.unshift(786))  //adding element in first  (🤐update)

// //delete operator
// let number = [12,3,45,66]
// delete number[1]
// console.log(number)
// console.log("length ->",number.length)  // length can't change

// let newArray = num.concat(number)
// console.log(newArray)

// //sort method
// let compare = (a,b)=>{
//     return a-b  //for decending b-a
// }
// let intger = [1,23,54,13,10]
// // console.log("sort -> ",intger.sort())   //sort alphabecally and update also
// console.log(intger.sort(compare))

// //splice and slice
// let no = [1,23,4,5,35,45,3]     //update🤐 and return deleted value
// no.splice(2,3,786,806,805,254)
// console.log(no)

// let nemo = [12,34,565,33,4,3];  //return newArray
// console.log(num.slice(2))

// console.log(nemo.reverse()) //reverse




// // ====  ▶▶ Loops in Array ====

// //foreach
// let ex = [12,34,35,787,5,50,99]
// ex.forEach((element)=>{
//     console.log(element*element ) 
// })

// //array.form :- used to create array
// let name ="Adil Bhai"
// console.log(Array.from(name))

// //for of
// for(let elem of name){
//     console.log(elem)
// }

// //for in
// for(const key in name){
//     console.log(name[key])  
// }

// const l = [1,23,4]
// l.forEach((ele)=>{
//     console.log(ele+4," ")
// })



// === ▶▶Lecture 20 ===
/*MAP FILTER & REDUCE ARRAY METHODS */
/*
let arr = [1,73,44,11,32,25]

//MAP ->return new array it is chainable method
let arr1 = arr.map((value,index,array) => {
    return value + index
})
console.log("Reterns new array: ",arr1)

//FILTER ->filter elements
let arr2 = arr.filter((value,index,array)=>{
    return value > 26
})
console.log(arr2)

//REDUCE  ->single value
add = (accumaltor,value) =>{
    return accumaltor + value
}
let arr3 = arr.reduce(add)
console.log(arr3)

*/


//=== PRACTICE PROBLEMS ===

//1:
let num = [12,32,11,2,10,101,67]
num.push(786)
console.log(num)

//3:
let myarr = [12,20,70,45]
let newArray = myarr.filter((value) =>{
    return value%10==0
})
console.log(newArray)

//4:
let no = [1,2,3,4,5,6,8]
let nemo = no.map((value)=>{
    return value*value
})
console.log(nemo)



//5 first Multiply by 2 second filter greater than 10 element then add those Element
let MyArray = [2,3,5,8,7]
let MyArray2 = MyArray.map((CurElm) => {
    return CurElm*2
}).filter((CurElm) => {
    return CurElm>10
}).reduce((accumaltor,curElem) => {
    return accumaltor+=curElem
})
console.log(MyArray2)  //14+16 single unit by reduce method

