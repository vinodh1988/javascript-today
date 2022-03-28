function temp(a){
     console.log("Function started running")
     var x=a("Javascript")
     if(x)
       console.log(x," Recevied from the caller")
     x=a("CSS")
       console.log("closing the funciton with ",x)
}

temp(function(data){
    console.log("in the call, received  ",data)
    return "processed  "+data;
})

setInterval(function(){
    console.log("I am meant to run every 3 seconds")
},3000);

//a function which is passed as parameter to function is called a callback function
//how would call this function?