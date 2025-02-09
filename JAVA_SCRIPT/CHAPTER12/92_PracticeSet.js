// // 1-3
// let a = (n,messege) =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve(messege);
//         },n*2000)
//     })
// }

// (async()=>{
//     let msg = await a(2,"HEllo")
//     console.log(msg)
//     let msg2 = await a(2,"World")
//     console.log(msg2)

// })()



// // 2
// function avg(a,b,c,d ,n){
//     return (a + b + c + d)/n;
// }

// arr = [1,4,6,4]
// n = 4
// console.log(avg(...arr),n)


// 4
simpleInterest = (p,r,t)=> {
    return (p*t*r)/100;
}
console.log(simpleInterest(1000000,15,1))

