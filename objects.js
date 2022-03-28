const person = {
    sno : 1,
    name : "rahul",
    city: "Chennai"
}

person.qualification = "BE"
person.sno=5
person.show=function(){
    console.log(this.sno,this.name,this.city,this.qualification)
}
console.log(person.sno)
for(let x in person)
    console.log(x,person[x])

person.show()

citizen = person

console.log(citizen)

citizen.country = "India"

console.log(person)

human  = {...person}

human.gender = "male"
console.log(human)
console.log(person)

