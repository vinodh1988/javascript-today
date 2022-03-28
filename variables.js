
a=20

function temp(){
    console.log(global.a)

     var a=490;   //function scope variable
}



temp();

console.log(a)
