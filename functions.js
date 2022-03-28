//parameters are always considered function scope variables
a=340

function fun(a){
    console.log(a);
    a=390;
}

fun(a) //javascript if parameter not passed wont raise error but will take the parameter as undefined

console.log(a)