//Asynchronous and non blocking
function getData(){
     return new Promise(function(resolve,reject){
        $.get("https://api.quotable.io/random",function(data,status){
            console.log("hi")
            resolve(data)
            
           })

     })
}
/*
function readData(){
const data=getData()
console.log("Received data")
data.then(
    (data)=>console.log(data),
    (err)=>console.log(err)
)
console.log("Other code")
}
*/

async function readData() {
    try{
      let data = await getData()
      console.log(data)
      console.log("Other code")
    }
    catch(e){
        console.log(e)
    }
}

readData()
console.log("outside world")

/*----------------------------------------------------------------
 [resource]<- Provider?  < --- Seeker
             [promise]---> Seeker
*/