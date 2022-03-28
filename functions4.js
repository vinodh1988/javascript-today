function first(a){
   var temp=a;
        console.log("inside first",temp)   
    function second(){
        console.log("Inside second",temp)
        console.log("inside second ",a)
    }
    
    return second
}//closure

sec = first(90)
sec()
sec()


//is this definition correct?