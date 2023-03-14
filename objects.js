class HUMAN {
    constructor(name, age){
        this.name=name;
        this.age= age;
    }
    talk (){
        return this.name + "speak"
    }
}

class MAN extends HUMAN {

}
let newMan = new MAN ("William", 20)
console.log(newMan.talk() )