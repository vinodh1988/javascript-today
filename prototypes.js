function Entity(name){
    
    this.name=name
    console.log(this)
    //console.log("hi")
}

Entity.prototype.display = function(){
    console.log("Name ",this.name)
}

//Entity()
const obj=new Entity("Raj");
const obj1=new Entity("Ravi")
obj.display()
obj1.display()
//console.log(global)
//until es5 there was no class supported in javascript