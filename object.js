a=[34,35,34,657,768,"Rahul"]
console.log(a[2]) //34
console.log(a[9]) //undefined
a[15]="Naveen"

console.log(a)//[34,35,34,657,768,"Rahul",9xEmpty,"Naveen"]

a[-89]="Tim"
a["Ricky"]="Martin"
a[100]="Joseph"

console.log(a)

console.log(a.length)
//not suitable if you have non numberic index
for(let x=0;x<a.length;x++){
    if(a[x]==undefined);
    else
      console.log(x," ----> ",a[x])
}
console.log("-------------------------------------")
for(let x in a)
    console.log(x," --->",a[x])

console.log("----------------------------------------------------")
for(let x of a)
  console.log(x)