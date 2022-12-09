class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}
//let p= new Person("NAINA SAXENA","21")
//p.greeting()
module.exports=Person