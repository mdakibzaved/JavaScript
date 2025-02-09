let a = {
    name1:"akib",
    language:"JavaScript",
    run:()=>{
        console.log("self Running")
    }
}

let p = {
    run:()=>{
        console.log("Hola")
    }
}


a.__proto__ = p;
console.log(a.run())  //if run() will not present in a it will take from its prototype called prototypal inheritance

p.__proto__ = {
    name2:"Adil Bhai"
}

console.log(a.name2)  //chaining of protype here