const sayHello = name => console.log(" HEllO " +name)
sayHello("Akib")

const x = {           //x refer to .this
    name:"Shebu",
    role:"JS Developer",
    exp:10,
    show:function() {
        // let that =this    //arrow func solve this problem to this inside variable
        setTimeout(()=>{      // Ifobject inside the function and it's nested func craeted by [function keyword] then below code does'nt run properly ▽
            console.log(`name: ${this.name} \n The role is ${this.role}`)

        },2000)
    }
}
x.show()   



