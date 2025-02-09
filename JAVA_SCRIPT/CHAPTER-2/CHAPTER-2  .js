//comparsion operators
let a = 7;
let n = '7'
console.log(a == n)   //it check only value
console.log(a===n)      //it check value and its types

//logical operators
let m = 7;
let k = 1;

console.log(m===7 && k===1)
console.log(m>5 || k<0)
console.log(!false)


//Conditional statement
let num = 7
let Prime = true
for (let i = 2; i < num; i++) {
    if(num % i == 0){
        Prime = false
    }    
}
if(Prime){
    console.log("Prime");
}
else{
    console.log("Not Prime")
}


//== PRACTICE SET ==
//1:
const age = 12
if(age >=10 && age <=20){
    console.log("lies b/w 10 and 20 ")
}

//2:
let z = 'A'
switch(z){
    case 'A':
        console.log("Annonymous")
        break;
    case 'M':
        console.log("Montu")
        break;
    default:
        console.log("HAcker Adda ")
}

//3:
let n1 = 32;
if(n1%2==0 && n1%3==0){
    console.log("It is divisble by 2 and 3")
}

//4:
let Age = 12
if(Age>18 && Age<=50){
    console.log("YEs you can drive")
}
else if(Age < 18){
    console.log("You can't drive it ")
}

