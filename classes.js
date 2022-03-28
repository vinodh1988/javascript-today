class Entity{
    constructor(name){
           this.name =name
    }

    display(){
        console.log("Name ",this.name)
    }
}

const obj=new Entity("Raj");
const obj1=new Entity("Ravi")
obj.display()
obj1.display()