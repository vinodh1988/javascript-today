//Asynchronous and non blocking
function getData(){
     return new Promise(function(resolve,reject){
        $.get("https://api.quotable.io/random",function(data,status){
            console.log("hi")
            resolve(data)
            
           })

     })
}

const data=getData()
console.log("Received data")
data.then(
    (data)=>console.log(data),
    (err)=>console.log(err)
)
console.log("Other code")


/*----------------------------------------------------------------
 [resource]<- Provider?  < --- Seeker
             [promise]---> Seeker
*/