// var a=10

// let greeter = "say hi "
// var times =4
// if(times >3 ){
//     let greeter="say hello"
    
// }

// let str="apple banana kiwi";
// document.getElementById("demo2").innerHTML = "sss"

// //console.log(greeter)

// const greeting = {
//     message:"Abc",
//     number:2
// }

// greeting.message="aca"
// //alert(greeter)

// var car;
// console.log(car+" "+typeof car)

// car=" "
// console.log(car+" "+typeof car)

// person={
//     name:"sanket",
//     usn:"1nt18is137",
//     fullname:function(){
//         return this.name+" "+this.usn;
//     }
// };
// //document.getElementById("demo").innerHTML=person.fullname();

// //let displaydate = ()=>{document.getElementById("demo").innerHTML=Date();}

// let name1 = () =>{
//     let person=prompt("enter your name","sanketh");
//     alert(person.length)
// }

// let escape="This is \"escap\" character";

// let name1="string" //string
// let name2=new String("string") //object









// car=null
// //console.log(typeof car)

// // let sum=()=>alert(10+20)
// // sum();

// function func(){
//     let a=document.getElementById("a").value
//     let b=document.getElementById("b").value
//     alert(Number(a)+Number(b))
// }

// let addelem=document.getElementById("add")
// addelem.addEventListener("click",()=>{
//     let add1=Number(document.getElementById("a").value)
//     let add2=Number(document.getElementById("b").value)
//     alert(add1+add2)
// })

// let data=document.getElementById("btn")
// data.addEventListener("click",()=>{
//     let data1=document.getElementById("name").value
//     alert(data1)
// })



// var delay = function (elem, callback) {
//     var timeout = null;
//     elem.onmouseover = function(e) {
//         e.stopPropagation()
//         timeout = setTimeout(callback, 1000);
//     };

//     elem.onmouseout = function() {
//         clearTimeout(timeout);
//     }
// };


// let elem1=document.getElementById("innerbox")
// // elem1.addEventListener("mouseover",(e)=>{
// //     e.stopPropagation()
// //     alert("danger");
// // })
// delay(elem1,()=>{
//     alert("danger")})

// let elem2=document.getElementById("middlebox")
// // elem2.addEventListener("mouseover",(e)=>{
// //     e.stopPropagation()
// //     alert("threat");
// // })
// delay(elem2,()=>{alert("threat")})
// let elem3=document.getElementById("outerbox")
// // elem3.addEventListener("mouseover",()=>{
// //     alert("safe");
// // })
// delay(elem3,()=>{alert("safe")})

var str1=prompt("enter your name");
alert(str1.length);

var str2=prompt("enter a string");
var str3=prompt("enter string to find");

let ind=str2.indexOf(str3)
alert(ind)

let elm=document.getElementById("add")
elm.addEventListener("click",()=>{
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    let c=a.concat(" "+b)
    document.getElementById("id1").innerHTML="fullname   "+c
})

let elm2=document.getElementById("slice")

elm2.addEventListener("click",()=>{
    let c=document.getElementById("c").value
    let d=Number(document.getElementById("d").value)
    let e=Number(document.getElementById("e").value)
    document.getElementById("id2").innerHTML=c.slice(d,e)
})
