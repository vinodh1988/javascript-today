function fun(){
    var a=300

    console.log("outer ",a)

    {
         let a=90  //block level variable
        console.log("inner",a)
    }

    console.log("outer",a)
}

fun()