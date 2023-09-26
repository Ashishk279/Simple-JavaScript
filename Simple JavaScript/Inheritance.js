class person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends person{

}

let student1 = new Student("John");
student1.greet();




