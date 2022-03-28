a=[34,35,6345,4,356,34,35]
b=a //copy by reference

c=[]
//normal way or old way of copying
for(let x in a){
    c[x]=a[x]
}

console.log(c)
c[3]=4380384;

console.log(c)
console.log(a)

//spread operator

d=[...a]

console.log(d)
console.log(a)