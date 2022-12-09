//console.log("hello",document)
//alert("HELLO")
//console.log("hello",window)
//setTimeout(()=>{
  //  console.log("Hi, I am timeout!!")
//},2000)
//const Human=require("./person")
//console.log(Human)
//const p1=new Human(`Richa`,16)
//p1.greeting()

function callback(){
console.log("hello")
}
//console.log("hi") 
function callbackHandler(mycallback){        
    console.log("We are runnning call back handler")
    mycallback()
}
callbackHandler(callback)                        
//console.log("tata bye bye")               
     