messege = "Good Night";
function greet(){
    let messege = "Good Morning";

    //it is inner Function a closure
    function displayFunc() {
        console.log(messege);
    }
    messege = "Assalamulaikum";
    return displayFunc()  //refrence will be changed bec return is after messege redeclaration

}
greet();



//in this func return  with its lexical enviourment  not display GoodMorning because of messege refrence is changed
// nested function also form closure agar if parentFunc will return ✨✔️
//closure func return with its lexical enviourMent