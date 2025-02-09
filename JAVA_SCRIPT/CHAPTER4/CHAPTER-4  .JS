// ▶lecture: 13
let name = 'AdhunikJS'
console.log(name.length)
console.log(name[0])

//Template litrals
let var1 = 'consistency'
let var2 = 'Perfection'
let sentance = `${var1} is more important than ${var2}`
console.log(sentance)

//Escape Sequence
let myName = 'Adam\'Angelo'



// ▶lecture: 14  
//String MEthods
let st = 'Patte\'Shot'
console.log(st.length)
console.log(st.toLowerCase())
console.log(st.toUpperCase())
console.log(st.slice(2,5))     //5 are not included
console.log(st.slice(5))
console.log(st.replace('Shot','Chull_shot'))

let my_Name = 'to Newton'
console.log(st.concat(" ++ ",my_Name,"Ok"))

let name2 = '    Menna'
console.log(name2.trim())

let fr = 'GuruJi' + 'Me' + ':)'
console.log(fr)
console.log(fr[6])



// ▶lecture: 15   PRACTICE SET
const sentance1 = 'I am A FullStack Developer'
let word = 'FullStack'
console.log(sentance1.includes(word))
console.log(sentance1.endsWith('r'))
console.log(sentance1.startsWith('A'))

let str4 = 'Please give Rs 1000'
console.log(str4.slice(15))
word[2] = 'K'    //string can't be change -> immutable
