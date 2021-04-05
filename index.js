var a=10

let greeter = "say hi "
var times =4
if(times >3 ){
    let greeter="say hello"
    
}

//console.log(greeter)

const greeting = {
    message:"Abc",
    number:2
}

greeting.message="aca"
//alert(greeter)

var car;
console.log(car+" "+typeof car)

car=" "
console.log(car+" "+typeof car)

car={
    name:"sanket",
    usn:"1nt18is137"
}

car=null
//console.log(typeof car)

// let sum=()=>alert(10+20)
// sum();

function func(){
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    alert(Number(a)+Number(b))
}

let addelem=document.getElementById("add")
addelem.addEventListener("click",()=>{
    let add1=Number(document.getElementById("a").value)
    let add2=Number(document.getElementById("b").value)
    alert(add1+add2)
})

let data=document.getElementById("btn")
data.addEventListener("click",()=>{
    let data1=document.getElementById("name").value
    alert(data1)
})



var delay = function (elem, callback) {
    var timeout = null;
    elem.onmouseover = function(e) {
        e.stopPropagation()
        timeout = setTimeout(callback, 1000);
    };

    elem.onmouseout = function() {
        clearTimeout(timeout);
    }
};


let elem1=document.getElementById("innerbox")
// elem1.addEventListener("mouseover",(e)=>{
//     e.stopPropagation()
//     alert("danger");
// })
delay(elem1,()=>{
    alert("danger")})

let elem2=document.getElementById("middlebox")
// elem2.addEventListener("mouseover",(e)=>{
//     e.stopPropagation()
//     alert("threat");
// })
delay(elem2,()=>{alert("threat")})
let elem3=document.getElementById("outerbox")
// elem3.addEventListener("mouseover",()=>{
//     alert("safe");
// })
delay(elem3,()=>{alert("safe")})

