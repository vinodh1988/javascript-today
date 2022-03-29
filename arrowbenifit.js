function getValueThroughCallback(callback){
    callback(Math.round(Math.random()*100000))
}

class Data{
    constructor(item){
        this.item=item
    }
    display(){
        console.log("Item ",this.item)
    }
    change(){
        /*getValueThroughCallback(function(value)
         {
             this.item=value
         }.bind(this))    */

         getValueThroughCallback((value)=>this.item=value)
}
}

const obj=new Data(7348)
obj.display()
obj.change()
obj.display()
