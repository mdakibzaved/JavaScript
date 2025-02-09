/* ▶ lecture:3
var a = 24
let b = 2
console.log(a);

a = "Akib Shebhu";   //redeclare u can in var but not in let
console.log(a);

const num = 23
// num = 3  can't be redeclare in case of const
console.log(num)

*/


/* ▶ lecture:4
//nn bb ss u    --Primitives in JS
let n = 786
let o = null
let c = true
let d = BigInt(567)
let f = "Consistency"
let g = Symbol("Khatam :) ")
let k = undefined
console.log(n,o,c,d,f,g,k)

//Non Primitives Data types -- Objects
const obj = {
    "shebu khan":786,
    "Nadeem Shaikh":806,
    "Love":false,
    "Attitude":true,
}
console.log(obj["Love"])
*/



// ▶ lecture:5 PRACTICE_SET
//problem:1
let st = "StandingTill"
let n = 786
console.log(st + n)

//problem:2
console.log(typeof(st))

//problem:3
const a = {
    "sectiion":'c',
    "dept_no":23,
}
// a = 786  //give an error can't be redeclared
a["name"] = "Legend"
a["dept_no"] = 5
console.log(a)

