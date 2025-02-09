//▶▶Array DestructinG
// let arr = [3,5,786,258,89]
//No need to do this
// let a = arr[0]
// let b = arr[1]

// let [a,b,c,d] = arr
// console.log(a,b,c,d)           //only 4 value  will print
// console.log(a,b,c,...rest)        //other value will come inside array fro {rest}

// let [a,,...rest] = arr           //after a its start from 786     3 [ 786, 258, 89 ]
// console.log(a,rest)     
  


// ▶▶Object destructure
// let {m , n} = {m:2,n:900}
// console.log(m,n)






//▶▶ Spread Oprator
let Arr = [2,3,4,56]
let obj = {...Arr}            //all value of Arr are stored in obj as key:value pair
console.log(obj)

function sum (v1,v2,v3,v4) {
    return v1+ v2 + v3 +v4;
}
console.log(sum(...Arr))         //all value passed here from Arr


let ob = {
    name: "AkibZaved",
    course: "BCA",
    enroll: "01917002021"
}
// console.log({...ob , name:"shebaz"})    //overWrites here name
console.log({name:"shebaz",...ob})    // not overwrites becOf name come in first



