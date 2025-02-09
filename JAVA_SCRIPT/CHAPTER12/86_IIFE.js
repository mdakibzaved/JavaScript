let a = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(786)
        },3000)
    })
}

(async()=>{
    let b = await a();
    console.log(b)

    let c = await a();
    console.log(c)

    let d = await a();
    console.log(d)
})()   //all var used in this fnc are globally not accesed 
