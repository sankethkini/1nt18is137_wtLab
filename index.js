var a=10

let greeter = "say hi "
var times =4
if(times >3 ){
    let greeter="say hello"
    
}

console.log(greeter)

const greeting = {
    message:"Abc",
    number:2
}

greeting.message="aca"
alert(greeter)

var car;
console.log(car+" "+typeof car)

car=" "
console.log(car+" "+typeof car)

car={
    name:"sanket",
    usn:"1nt18is137"
}

car=null
console.log(typeof car)

let sum=()=>alert(10+20)
sum();

function func(){
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    alert(Number(a)+Number(b))
}

let data=document.getElementById("btn")
data.addEventListener("click",()=>{
    let data1=document.getElementById("name").value
    alert(data1)
})
