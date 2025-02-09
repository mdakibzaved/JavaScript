let Function = () =>{
    try {
        // age   
        let name = "Akib"
        console.log(name)
        return  //isse phele finally chal jayega
    } catch (error) {
        console.log(error.name)
        // console.log(akib)  //agr isme error hota to nicheW code nhi chalta simple con.log wala
    } finally{
        console.log("Always Print Irrespect of andhi Tufan Mein Bhi😅")
    }
}
Function()
console.log("Ending Iam in Outside Function")


