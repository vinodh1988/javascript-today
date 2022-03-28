const a=[34,35,345,645]

console.log(a)

a.subset=[344,5345,534,56]

console.log(a)
console.log(a.subset[3])

function sample(){
    console.log("sample")
}

sample.simple =function(){
    console.log("simple")
}
sample.store=[34,356,456,45,645]

console.log(sample)

sample()
sample.simple()
console.log(sample.store)